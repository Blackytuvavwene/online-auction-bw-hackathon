"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_scalars_1 = require("graphql-scalars");
const graphql_type_json_1 = require("graphql-type-json");
const types_1 = require("../../fields/config/types");
const withOperators_1 = __importDefault(require("./withOperators"));
const operators_1 = __importDefault(require("./operators"));
const combineParentName_1 = __importDefault(require("../utilities/combineParentName"));
const formatName_1 = __importDefault(require("../utilities/formatName"));
const recursivelyBuildNestedPaths_1 = __importDefault(require("./recursivelyBuildNestedPaths"));
const fieldToSchemaMap = (parentName) => ({
    number: (field) => {
        const type = graphql_1.GraphQLFloat;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, ...operators_1.default.comparison]),
        };
    },
    text: (field) => {
        const type = graphql_1.GraphQLString;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, 'like', 'contains']),
        };
    },
    email: (field) => {
        const type = graphql_scalars_1.EmailAddressResolver;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, 'like', 'contains']),
        };
    },
    textarea: (field) => {
        const type = graphql_1.GraphQLString;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, 'like', 'contains']),
        };
    },
    richText: (field) => {
        const type = graphql_type_json_1.GraphQLJSON;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, 'like', 'contains']),
        };
    },
    code: (field) => {
        const type = graphql_1.GraphQLString;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, 'like', 'contains']),
        };
    },
    radio: (field) => ({
        type: (0, withOperators_1.default)(field, new graphql_1.GraphQLEnumType({
            name: `${(0, combineParentName_1.default)(parentName, field.name)}_Input`,
            values: field.options.reduce((values, option) => {
                if ((0, types_1.optionIsObject)(option)) {
                    return {
                        ...values,
                        [(0, formatName_1.default)(option.value)]: {
                            value: option.value,
                        },
                    };
                }
                return {
                    ...values,
                    [(0, formatName_1.default)(option)]: {
                        value: option,
                    },
                };
            }, {}),
        }), parentName, [...operators_1.default.equality, 'like', 'contains']),
    }),
    date: (field) => {
        const type = graphql_scalars_1.DateTimeResolver;
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, ...operators_1.default.comparison, 'like']),
        };
    },
    point: (field) => {
        const type = (0, graphql_1.GraphQLList)(graphql_1.GraphQLFloat);
        return {
            type: (0, withOperators_1.default)(field, type, parentName, [...operators_1.default.equality, ...operators_1.default.comparison, ...operators_1.default.geo]),
        };
    },
    relationship: (field) => {
        let type = (0, withOperators_1.default)(field, graphql_1.GraphQLString, parentName, [...operators_1.default.equality, ...operators_1.default.contains]);
        if (Array.isArray(field.relationTo)) {
            type = new graphql_1.GraphQLInputObjectType({
                name: `${(0, combineParentName_1.default)(parentName, field.name)}_Relation`,
                fields: {
                    relationTo: {
                        type: new graphql_1.GraphQLEnumType({
                            name: `${(0, combineParentName_1.default)(parentName, field.name)}_Relation_RelationTo`,
                            values: field.relationTo.reduce((values, relation) => ({
                                ...values,
                                [(0, formatName_1.default)(relation)]: {
                                    value: relation,
                                },
                            }), {}),
                        }),
                    },
                    value: { type: graphql_1.GraphQLString },
                },
            });
        }
        return { type };
    },
    upload: (field) => ({
        type: (0, withOperators_1.default)(field, graphql_1.GraphQLString, parentName, [...operators_1.default.equality]),
    }),
    checkbox: (field) => ({
        type: (0, withOperators_1.default)(field, graphql_1.GraphQLBoolean, parentName, [...operators_1.default.equality]),
    }),
    select: (field) => ({
        type: (0, withOperators_1.default)(field, new graphql_1.GraphQLEnumType({
            name: `${(0, combineParentName_1.default)(parentName, field.name)}_Input`,
            values: field.options.reduce((values, option) => {
                if (typeof option === 'object' && option.value) {
                    return {
                        ...values,
                        [(0, formatName_1.default)(option.value)]: {
                            value: option.value,
                        },
                    };
                }
                if (typeof option === 'string') {
                    return {
                        ...values,
                        [option]: {
                            value: option,
                        },
                    };
                }
                return values;
            }, {}),
        }), parentName, [...operators_1.default.equality, ...operators_1.default.contains]),
    }),
    array: (field) => (0, recursivelyBuildNestedPaths_1.default)(parentName, field),
    group: (field) => (0, recursivelyBuildNestedPaths_1.default)(parentName, field),
    row: (field) => field.fields.reduce((rowSchema, subField) => {
        const getFieldSchema = fieldToSchemaMap(parentName)[subField.type];
        if (getFieldSchema) {
            const rowFieldSchema = getFieldSchema(subField);
            if ((0, types_1.fieldHasSubFields)(subField)) {
                return [
                    ...rowSchema,
                    ...rowFieldSchema,
                ];
            }
            if ((0, types_1.fieldAffectsData)(subField)) {
                return [
                    ...rowSchema,
                    {
                        key: subField.name,
                        type: rowFieldSchema,
                    },
                ];
            }
        }
        return rowSchema;
    }, []),
    collapsible: (field) => field.fields.reduce((rowSchema, subField) => {
        const getFieldSchema = fieldToSchemaMap(parentName)[subField.type];
        if (getFieldSchema) {
            const rowFieldSchema = getFieldSchema(subField);
            if ((0, types_1.fieldHasSubFields)(subField)) {
                return [
                    ...rowSchema,
                    ...rowFieldSchema,
                ];
            }
            if ((0, types_1.fieldAffectsData)(subField)) {
                return [
                    ...rowSchema,
                    {
                        key: subField.name,
                        type: rowFieldSchema,
                    },
                ];
            }
        }
        return rowSchema;
    }, []),
    tabs: (field) => field.tabs.reduce((tabSchema, tab) => {
        return [
            ...tabSchema,
            ...tab.fields.reduce((rowSchema, subField) => {
                const getFieldSchema = fieldToSchemaMap(parentName)[subField.type];
                if (getFieldSchema) {
                    const rowFieldSchema = getFieldSchema(subField);
                    if ((0, types_1.fieldHasSubFields)(subField)) {
                        return [
                            ...rowSchema,
                            ...rowFieldSchema,
                        ];
                    }
                    if ((0, types_1.fieldAffectsData)(subField)) {
                        return [
                            ...rowSchema,
                            {
                                key: subField.name,
                                type: rowFieldSchema,
                            },
                        ];
                    }
                }
                return rowSchema;
            }, []),
        ];
    }, []),
});
exports.default = fieldToSchemaMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRUb1doZXJlSW5wdXRTY2hlbWFNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvZmllbGRUb1doZXJlSW5wdXRTY2hlbWFNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FPaUI7QUFDakIscURBQXlFO0FBQ3pFLHlEQUFnRDtBQUNoRCxxREFXbUM7QUFDbkMsb0VBQTRDO0FBQzVDLDREQUFvQztBQUNwQyx1RkFBK0Q7QUFDL0QseUVBQWlEO0FBQ2pELGdHQUF3RTtBQUV4RSxNQUFNLGdCQUFnQixHQUFnQyxDQUFDLFVBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsTUFBTSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFO1FBQzdCLE1BQU0sSUFBSSxHQUFHLHNCQUFZLENBQUM7UUFDMUIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFBLHVCQUFhLEVBQ2pCLEtBQUssRUFDTCxJQUFJLEVBQ0osVUFBVSxFQUNWLENBQUMsR0FBRyxtQkFBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLG1CQUFTLENBQUMsVUFBVSxDQUFDLENBQ2pEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxLQUFnQixFQUFFLEVBQUU7UUFDekIsTUFBTSxJQUFJLEdBQUcsdUJBQWEsQ0FBQztRQUMzQixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUEsdUJBQWEsRUFDakIsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsQ0FBQyxHQUFHLG1CQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FDNUM7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtRQUMzQixNQUFNLElBQUksR0FBRyxzQ0FBb0IsQ0FBQztRQUNsQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUEsdUJBQWEsRUFDakIsS0FBSyxF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