"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_type_json_1 = require("graphql-type-json");
const graphql_1 = require("graphql");
const formatName_1 = __importDefault(require("../utilities/formatName"));
const buildFields = (label, fieldsToBuild) => fieldsToBuild.reduce((builtFields, field) => {
    if (!field.hidden) {
        if (field.name) {
            const fieldName = (0, formatName_1.default)(field.name);
            const objectTypeFields = ['create', 'read', 'update', 'delete'].reduce((operations, operation) => {
                const capitalizedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
                return {
                    ...operations,
                    [operation]: {
                        type: new graphql_1.GraphQLObjectType({
                            name: `${label}_${fieldName}_${capitalizedOperation}`,
                            fields: {
                                permission: {
                                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
                                },
                            },
                        }),
                    },
                };
            }, {});
            if (field.fields) {
                objectTypeFields.fields = {
                    type: new graphql_1.GraphQLObjectType({
                        name: `${label}_${fieldName}_Fields`,
                        fields: buildFields(`${label}_${fieldName}`, field.fields),
                    }),
                };
            }
            return {
                ...builtFields,
                [field.name]: {
                    type: new graphql_1.GraphQLObjectType({
                        name: `${label}_${fieldName}`,
                        fields: objectTypeFields,
                    }),
                },
            };
        }
        if (!field.name && field.fields) {
            const subFields = buildFields(label, field.fields);
            return {
                ...builtFields,
                ...subFields,
            };
        }
        if (field.type === 'tabs') {
            return field.tabs.reduce((fieldsWithTabFields, tab) => {
                return {
                    ...fieldsWithTabFields,
                    ...buildFields(label, tab.fields),
                };
            }, { ...builtFields });
        }
    }
    return builtFields;
}, {});
const buildEntity = (label, entityFields, operations) => {
    const formattedLabel = (0, formatName_1.default)(label);
    const fields = {
        fields: {
            type: new graphql_1.GraphQLObjectType({
                name: (0, formatName_1.default)(`${formattedLabel}Fields`),
                fields: buildFields(`${formattedLabel}Fields`, entityFields),
            }),
        },
    };
    operations.forEach((operation) => {
        const capitalizedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
        fields[operation] = {
            type: new graphql_1.GraphQLObjectType({
                name: `${formattedLabel}${capitalizedOperation}Access`,
                fields: {
                    permission: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
                    where: { type: graphql_type_json_1.GraphQLJSONObject },
                },
            }),
        };
    });
    return fields;
};
function buildPoliciesType(payload) {
    const fields = {
        canAccessAdmin: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean),
        },
    };
    Object.values(payload.config.collections).forEach((collection) => {
        const collectionOperations = ['create', 'read', 'update', 'delete'];
        if (collection.auth && (typeof collection.auth.maxLoginAttempts !== 'undefined' && collection.auth.maxLoginAttempts !== 0)) {
            collectionOperations.push('unlock');
        }
        if (collection.versions) {
            collectionOperations.push('readVersions');
        }
        fields[(0, formatName_1.default)(collection.slug)] = {
            type: new graphql_1.GraphQLObjectType({
                name: (0, formatName_1.default)(`${collection.labels.singular}Access`),
                fields: buildEntity(collection.labels.singular, collection.fields, collectionOperations),
            }),
        };
    });
    Object.values(payload.config.globals).forEach((global) => {
        const globalOperations = ['read', 'update'];
        if (global.versions) {
            globalOperations.push('readVersions');
        }
        fields[(0, formatName_1.default)(global.slug)] = {
            type: new graphql_1.GraphQLObjectType({
                name: (0, formatName_1.default)(`${global.label}Access`),
                fields: buildEntity(global.label, global.fields, globalOperations),
            }),
        };
    });
    return new graphql_1.GraphQLObjectType({
        name: 'Access',
        fields,
    });
}
exports.default = buildPoliciesType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRQb2xpY2llc1R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvYnVpbGRQb2xpY2llc1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBc0Q7QUFDdEQscUNBQTRFO0FBQzVFLHlFQUFpRDtBQVlqRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxTQUFTLEdBQUcsSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV6QyxNQUFNLGdCQUFnQixHQUFxQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFDakgsTUFBTSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXBGLE9BQU87b0JBQ0wsR0FBRyxVQUFVO29CQUNiLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLElBQUksMkJBQWlCLENBQUM7NEJBQzFCLElBQUksRUFBRSxHQUFHLEtBQUssSUFBSSxTQUFTLElBQUksb0JBQW9CLEVBQUU7NEJBQ3JELE1BQU0sRUFBRTtnQ0FDTixVQUFVLEVBQUU7b0NBQ1YsSUFBSSxFQUFFLElBQUksd0JBQWMsQ0FBQyx3QkFBYyxDQUFDO2lDQUN6Qzs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGLENB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