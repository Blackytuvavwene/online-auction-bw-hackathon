"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const deepmerge_1 = __importDefault(require("deepmerge"));
const mongoose_1 = __importDefault(require("mongoose"));
const combineMerge_1 = require("../utilities/combineMerge");
const getSchemaTypeOptions_1 = require("./getSchemaTypeOptions");
const operatorMap_1 = require("./operatorMap");
const sanitizeFormattedValue_1 = require("./sanitizeFormattedValue");
const validOperators = ['like', 'contains', 'in', 'all', 'not_in', 'greater_than_equal', 'greater_than', 'less_than_equal', 'less_than', 'not_equals', 'equals', 'exists', 'near'];
const subQueryOptions = {
    limit: 50,
    lean: true,
};
class ParamParser {
    constructor(model, rawParams, locale) {
        this.parse = this.parse.bind(this);
        this.model = model;
        this.rawParams = rawParams;
        this.locale = locale;
        this.query = {
            searchParams: {},
            sort: false,
        };
    }
    // Entry point to the ParamParser class
    async parse() {
        if (typeof this.rawParams === 'object') {
            for (const key of Object.keys(this.rawParams)) {
                if (key === 'where') {
                    this.query.searchParams = await this.parsePathOrRelation(this.rawParams.where);
                }
                else if (key === 'sort') {
                    this.query.sort = this.rawParams[key];
                }
            }
            return this.query;
        }
        return {};
    }
    async parsePathOrRelation(object) {
        let result = {};
        // We need to determine if the whereKey is an AND, OR, or a schema path
        for (const relationOrPath of Object.keys(object)) {
            if (relationOrPath.toLowerCase() === 'and') {
                const andConditions = object[relationOrPath];
                const builtAndConditions = await this.buildAndOrConditions(andConditions);
                if (builtAndConditions.length > 0)
                    result.$and = builtAndConditions;
            }
            else if (relationOrPath.toLowerCase() === 'or' && Array.isArray(object[relationOrPath])) {
                const orConditions = object[relationOrPath];
                const builtOrConditions = await this.buildAndOrConditions(orConditions);
                if (builtOrConditions.length > 0)
                    result.$or = builtOrConditions;
            }
            else {
                // It's a path - and there can be multiple comparisons on a single path.
                // For example - title like 'test' and title not equal to 'tester'
                // So we need to loop on keys again here to handle each operator independently
                const pathOperators = object[relationOrPath];
                if (typeof pathOperators === 'object') {
                    for (const operator of Object.keys(pathOperators)) {
                        if (validOperators.includes(operator)) {
                            const searchParam = await this.buildSearchParam(this.model.schema, relationOrPath, pathOperators[operator], operator);
                            if ((searchParam === null || searchParam === void 0 ? void 0 : searchParam.value) && (searchParam === null || searchParam === void 0 ? void 0 : searchParam.path)) {
                                result = {
                                    ...result,
                                    [searchParam.path]: searchParam.value,
                                };
                            }
                            else if (typeof (searchParam === null || searchParam === void 0 ? void 0 : searchParam.value) === 'object') {
                                result = (0, deepmerge_1.default)(result, searchParam.value, { arrayMerge: combineMerge_1.combineMerge });
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
    async buildAndOrConditions(conditions) {
        const completedConditions = [];
        // Loop over all AND / OR operations and add them to the AND / OR query param
        // Operations should come through as an array
        for (const condition of conditions) {
            // If the operation is properly formatted as an object
            if (typeof condition === 'object') {
                const result = await this.parsePathOrRelation(condition);
                if (Object.keys(result).length > 0) {
                    completedConditions.push(result);
                }
            }
        }
        return completedConditions;
    }
    // Build up an array of auto-localized paths to search on
    // Multiple paths may be possible if searching on properties of relationship fields
    getLocalizedPaths(Model, incomingPath, operator) {
        const { schema } = Model;
        const pathSegments = incomingPath.split('.');
        let paths = [
            {
                path: '',
                complete: false,
                Model,
            },
        ];
        pathSegments.every((segment, i) => {
            const lastIncompletePath = paths.find(({ complete }) => !complete);
            const { path } = lastIncompletePath;
            const currentPath = path ? `${path}.${segment}` : segment;
            const currentSchemaType = schema.path(currentPath);
            const currentSchemaPathType = schema.pathType(currentPath);
            if (currentSchemaPathType === 'nested') {
                lastIncompletePath.path = currentPath;
                return true;
            }
            const upcomingSegment = pathSegments[i + 1];
            if (currentSchemaType && currentSchemaPathType !== 'adhocOrUndefined') {
                const currentSchemaTypeOptions = (0, getSchemaTypeOptions_1.getSchemaTypeOptions)(currentSchemaType);
                if (currentSchemaTypeOptions.localized) {
                    const upcomingLocalizedPath = `${currentPath}.${upcomingSegment}`;
                    const upcomingSchemaTypeWithLocale = schema.path(upcomingLocalizedPath);
                    if (upcomingSchemaTypeWithLocale) {
                        lastIncompletePath.path = currentPath;
                        return true;
                    }
                    const localePath = `${currentPath}.${this.locale}`;
                    const localizedSchemaType = schema.path(localePath);
                    if (localizedSchemaType || operator === 'near') {
                        lastIncompletePath.path = localePath;
                        return true;
                    }
                }
                lastIncompletePath.path = currentPath;
                return true;
            }
            const priorSchemaType = schema.path(path);
            if (priorSchemaType) {
                const priorSchemaTypeOptions = (0, getSchemaTypeOptions_1.getSchemaTypeOptions)(priorSchemaType);
                if (typeof priorSchemaTypeOptions.ref === 'string') {
                    const RefModel = mongoose_1.default.model(priorSchemaTypeOptions.ref);
                    lastIncompletePath.complete = true;
                    const remainingPath = pathSegments.slice(i).join('.');
                    paths = [
                        ...paths,
                        ...this.getLocalizedPaths(RefModel, remainingPath, operator),
                    ];
                    return false;
                }
            }
            if (operator === 'near' || currentSchemaPathType === 'adhocOrUndefined') {
                lastIncompletePath.path = currentPath;
            }
            return true;
        });
        return paths;
    }
    // Convert the Payload key / value / operator into a MongoDB query
    async buildSearchParam(schema, incomingPath, val, operator) {
        // Replace GraphQL nested field double underscore formatting
        let sanitizedPath = incomingPath.replace(/__/gi, '.');
        if (sanitizedPath === 'id')
            sanitizedPath = '_id';
        const collectionPaths = this.getLocalizedPaths(this.model, sanitizedPath, operator);
        const [{ path }] = collectionPaths;
        if (path) {
            const schemaType = schema.path(path);
            const schemaOptions = (0, getSchemaTypeOptions_1.getSchemaTypeOptions)(schemaType);
            const formattedValue = (0, sanitizeFormattedValue_1.sanitizeQueryValue)(schemaType, path, operator, val);
            // If there are multiple collections to search through,
            // Recursively build up a list of query constraints
            if (collectionPaths.length > 1) {
                // Remove top collection and reverse array
                // to work backwards from top
                const collectionPathsToSearch = collectionPaths.slice(1).reverse();
                const initialRelationshipQuery = {
                    value: {},
                };
                const relationshipQuery = await collectionPathsToSearch.reduce(async (priorQuery, { Model: SubModel, path: subPath }, i) => {
                    const priorQueryResult = await priorQuery;
                    // On the "deepest" collection,
                    // Search on the value passed through the query
                    if (i === 0) {
                        const subQuery = await SubModel.buildQuery({
                            where: {
                                [subPath]: {
                                    [operator]: val,
                                },
                            },
                        }, this.locale);
                        const result = await SubModel.find(subQuery, subQueryOptions);
                        const $in = result.map((doc) => doc._id.toString());
                        if (collectionPathsToSearch.length === 1)
                            return { path, value: { $in } };
                        return {
                            value: { _id: { $in } },
                        };
                    }
                    const subQuery = priorQueryResult.value;
                    const result = await SubModel.find(subQuery, subQueryOptions);
                    const $in = result.map((doc) => doc._id.toString());
                    // If it is the last recursion
                    // then pass through the search param
                    if (i + 1 === collectionPathsToSearch.length) {
                        return { path, value: { $in } };
                    }
                    return {
                        value: {
                            _id: { $in },
                        },
                    };
                }, Promise.resolve(initialRelationshipQuery));
                return relationshipQuery;
            }
            if (operator && validOperators.includes(operator)) {
                const operatorKey = operatorMap_1.operatorMap[operator];
                let overrideQuery = false;
                let query;
                // If there is a ref, this is a relationship or upload field
                // IDs can be either string, number, or ObjectID
                // So we need to build an `or` query for all these types
                if (schemaOptions && (schemaOptions.ref || schemaOptions.refPath)) {
                    overrideQuery = true;
                    query = {
                        $or: [
                            {
                                [path]: {
                                    [operatorKey]: formattedValue,
                                },
                            },
                        ],
                    };
                    if (typeof formattedValue === 'number' || (typeof formattedValue === 'string' && mongoose_1.default.Types.ObjectId.isValid(formattedValue))) {
                        query.$or.push({
                            [path]: {
                                [operatorKey]: formattedValue.toString(),
                            },
                        });
                    }
                    if (typeof formattedValue === 'string') {
                        if (!Number.isNaN(formattedValue)) {
                            query.$or.push({
                                [path]: {
                                    [operatorKey]: parseFloat(formattedValue),
                                },
                            });
                        }
                    }
                }
                // If forced query
                if (overrideQuery) {
                    return {
                        value: query,
                    };
                }
                // Some operators like 'near' need to define a full query
                // so if there is no operator key, just return the value
                if (!operatorKey) {
                    return {
                        path,
                        value: formattedValue,
                    };
                }
                return {
                    path,
                    value: { [operatorKey]: formattedValue },
                };
            }
        }
        return undefined;
    }
}
// This plugin asynchronously builds a list of Mongoose query constraints
// which can then be used in subsequent Mongoose queries.
function buildQueryPlugin(schema) {
    const modifiedSchema = schema;
    async function buildQuery(rawParams, locale) {
        const paramParser = new ParamParser(this, rawParams, locale);
        const params = await paramParser.parse();
        return params.searchParams;
    }
    modifiedSchema.statics.buildQuery = buildQuery;
}
exports.default = buildQueryPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRRdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb25nb29zZS9idWlsZFF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6QywwREFBa0M7QUFDbEMsd0RBQWlEO0FBQ2pELDREQUF5RDtBQUV6RCxpRUFBOEQ7QUFDOUQsK0NBQTRDO0FBQzVDLHFFQUE4RDtBQUU5RCxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVuTCxNQUFNLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQztBQXFCRixNQUFNLFdBQVc7SUFjZixZQUFZLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxZQUFZLEVBQUUsRUFBRTtZQUNoQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsdUNBQXVDO0lBRXZDLEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQ3RDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtvQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEY7cUJBQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE1BQU07UUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBc0IsQ0FBQztRQUNwQyx1RUFBdUU7UUFDdkUsS0FBSyxNQUFNLGNBQWMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELElBQUksY0FBYyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtnQkFDMUMsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7YUFDckU7aUJBQU0sSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pGLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQztvQkFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDO2FBQ2xFO2lCQUFNO2dCQUNMLHdFQUF3RTtnQkFDeEUsa0VBQWtFO2dCQUNsRSw4RUFBOEU7Z0JBQzlFLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7b0JBQ3JDLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTt3QkFDakQsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUNyQyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUV0SCxJQUFJLENBQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEtBQUssTUFBSSxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsSUFBSSxDQUFBLEVBQUU7Z0NBQzNDLE1BQU0sR0FBRztvQ0FDUCxHQUFHLE1BQU07b0NBQ1QsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUs7aUNBQ3RDLENBQUM7NkJBQ0g7aUNBQU0sSUFBSSxPQUFPLENBQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEtBQUssQ0FBQSxLQUFLLFFBQVEsRUFBRTtnQ0FDakQsTUFBTSxHQUFHLElBQUEsbUJBQVMsRUFBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSwyQkFBWSxFQUFFLENBQUMsQ0FBQzs2QkFDN0U7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVO1FBQ25DLE1BQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQy9CLDZFQUE2RTtRQUM3RSw2Q0FBNkM7UUFDN0MsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsc0RBQXNEO1lBQ3RELElBQUksT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDbEM7YUFDRjtTQUNGO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQseURBQXlEO0lBQ3pELG1GQUFtRjtJQUVuRixpQkFBaUIsQ0FBQyxLQUFzQixFQUFFLFlBQW9CLEVBQUUsUUFBUTtRQUN0RSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0MsSUFBSSxLQUFLLEdBQWtCO1lBQ3pCO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxLQUFLO2dCQUNmLEtBQUs7YUFDTjtTQUNGLENBQUM7UUFFRixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLGtCQUFrQixDQUFDO1lBRXBDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUMxRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNELElBQUkscUJBQXFCLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN0QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU1QyxJQUFJLGlCQUFpQixJQUFJLHFCQUFxQixLQUFLLGtCQUFrQixFQUFFO2dCQUNyRSxNQUFNLHdCQUF3QixHQUFHLElBQUEsMkNBQW9CLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFekUsSUFBSSx3QkFBd0IsQ0FBQyxTQUFTLEVBQUU7b0JBQ3RDLE1BQU0scUJBQXFCLEdBQUcsR0FBRyxXQUFXLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ2xFLE1BQU0sNEJBQTRCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUV4RSxJQUFJLDRCQUE0QixFQUFFO3dCQUNoQyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO3dCQUN0QyxPQUFPLElBQUksQ0FBQztxQkFDYjtvQkFFRCxNQUFNLFVBQVUsR0FBRyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ25ELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFcEQsSUFBSSxtQkFBbUIsSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFO3dCQUM5QyxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO3dCQUNyQyxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRjtnQkFFRCxrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN0QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQyxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsTUFBTSxzQkFBc0IsR0FBRyxJQUFBLDJDQUFvQixFQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLE9BQU8sc0JBQXNCLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDbEQsTUFBTSxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFRLENBQUM7b0JBRW5FLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBRW5DLE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUV0RCxLQUFLLEdBQUc7d0JBQ04sR0FBRyxLQUFLO3dCQUNSLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDO3FCQUM3RCxDQUFDO29CQUVGLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFFRCxJQUFJLFFBQVEsS0FBSyxNQUFNLElBQUkscUJBQXFCLEtBQUssa0JBQWtCLEVBQUU7Z0JBQ3ZFLGtCQUFrQixDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7YUFDdkM7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxRQUFRO1FBQ3hELDREQUE0RDtRQUM1RCxJQUFJLGFBQWEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RCxJQUFJLGFBQWEsS0FBSyxJQUFJO1lBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUVsRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEYsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUM7UUFFbkMsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sYUFBYSxHQUFHLElBQUEsMkNBQW9CLEVBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkQsTUFBTSxjQUFjLEdBQUcsSUFBQSwyQ0FBa0IsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUUzRSx1REFBdUQ7WUFDdkQsbURBQW1EO1lBQ25ELElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLDBDQUEwQztnQkFDMUMsNkJBQTZCO2dCQUM3QixNQUFNLHVCQUF1QixHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRW5FLE1BQU0sd0JBQXdCLEdBQUc7b0JBQy9CLEtBQUssRUFBRSxFQUFFO2lCQUNLLENBQUM7Z0JBRWpCLE1BQU0saUJBQWlCLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN6SCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sVUFBVSxDQUFDO29CQUUxQywrQkFBK0I7b0JBQy9CLCtDQUErQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNYLE1BQU0sUUFBUSxHQUFHLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQzs0QkFDekMsS0FBSyxFQUFFO2dDQUNMLENBQUMsT0FBTyxDQUFDLEVBQUU7b0NBQ1QsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHO2lDQUNoQjs2QkFDRjt5QkFDRixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFaEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQzt3QkFFOUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUVwRCxJQUFJLHVCQUF1QixDQUFDLE1BQU0sS0FBSyxDQUFDOzRCQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzt3QkFFMUUsT0FBTzs0QkFDTCxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTt5QkFDeEIsQ0FBQztxQkFDSDtvQkFFRCxNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7b0JBQ3hDLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7b0JBRTlELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFFcEQsOEJBQThCO29CQUM5QixxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUU7d0JBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztxQkFDakM7b0JBRUQsT0FBTzt3QkFDTCxLQUFLLEVBQUU7NEJBQ0wsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFO3lCQUNiO3FCQUNGLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLGlCQUFpQixDQUFDO2FBQzFCO1lBRUQsSUFBSSxRQUFRLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDakQsTUFBTSxXQUFXLEdBQUcseUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLEtBQUssQ0FBQztnQkFFViw0REFBNEQ7Z0JBQzVELGdEQUFnRDtnQkFDaEQsd0RBQXdEO2dCQUN4RCxJQUFJLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNqRSxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUVyQixLQUFLLEdBQUc7d0JBQ04sR0FBRyxFQUFFOzRCQUNIO2dDQUNFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0NBQ04sQ0FBQyxXQUFXLENBQUMsRUFBRSxjQUFjO2lDQUM5Qjs2QkFDRjt5QkFDRjtxQkFDRixDQUFDO29CQUVGLElBQUksT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLGtCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTt3QkFDakksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7NEJBQ2IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDTixDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7NkJBQ3pDO3lCQUNGLENBQUMsQ0FBQztxQkFDSjtvQkFFRCxJQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTt3QkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUU7NEJBQ2pDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dDQUNiLENBQUMsSUFBSSxDQUFDLEVBQUU7b0NBQ04sQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLENBQUMsY0FBYyxDQUFDO2lDQUMxQzs2QkFDRixDQUFDLENBQUM7eUJBQ0o7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsa0JBQWtCO2dCQUNsQixJQUFJLGFBQWEsRUFBRTtvQkFDakIsT0FBTzt3QkFDTCxLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFDO2lCQUNIO2dCQUVELHlEQUF5RDtnQkFDekQsd0RBQXdEO2dCQUN4RCxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNoQixPQUFPO3dCQUNMLElBQUk7d0JBQ0osS0FBSyxFQUFFLGNBQWM7cUJBQ3RCLENBQUM7aUJBQ0g7Z0JBRUQsT0FBTztvQkFDTCxJQUFJO29CQUNKLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYyxFQUFFO2lCQUN6QyxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQUNELHlFQUF5RTtBQUN6RSx5REFBeUQ7QUFDekQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNO0lBQzlCLE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUM5QixLQUFLLFVBQVUsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNO1FBQ3pDLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFDRCxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDakQsQ0FBQztBQUNELGtCQUFlLGdCQUFnQixDQUFDIn0=