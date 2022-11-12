"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
const graphql_1 = require("graphql");
const formatName_1 = __importDefault(require("../../graphql/utilities/formatName"));
const buildGlobalFields_1 = require("../../versions/buildGlobalFields");
const buildPaginatedListType_1 = __importDefault(require("../../graphql/schema/buildPaginatedListType"));
const findOne_1 = __importDefault(require("./resolvers/findOne"));
const update_1 = __importDefault(require("./resolvers/update"));
const findVersionByID_1 = __importDefault(require("./resolvers/findVersionByID"));
const findVersions_1 = __importDefault(require("./resolvers/findVersions"));
const restoreVersion_1 = __importDefault(require("./resolvers/restoreVersion"));
const buildObjectType_1 = __importDefault(require("../../graphql/schema/buildObjectType"));
const buildMutationInputType_1 = __importDefault(require("../../graphql/schema/buildMutationInputType"));
const buildWhereInputType_1 = __importDefault(require("../../graphql/schema/buildWhereInputType"));
function initGlobalsGraphQL(payload) {
    if (payload.config.globals) {
        Object.keys(payload.globals.config).forEach((slug) => {
            const global = payload.globals.config[slug];
            const { label, fields, versions, } = global;
            const formattedLabel = (0, formatName_1.default)(label);
            global.graphQL = {};
            const forceNullableObjectType = Boolean(versions === null || versions === void 0 ? void 0 : versions.drafts);
            global.graphQL.type = (0, buildObjectType_1.default)({
                payload,
                name: formattedLabel,
                parentName: formattedLabel,
                fields,
                forceNullable: forceNullableObjectType,
            });
            global.graphQL.mutationInputType = new graphql_1.GraphQLNonNull((0, buildMutationInputType_1.default)(payload, formattedLabel, fields, formattedLabel));
            payload.Query.fields[formattedLabel] = {
                type: global.graphQL.type,
                args: {
                    draft: { type: graphql_1.GraphQLBoolean },
                    ...(payload.config.localization ? {
                        locale: { type: payload.types.localeInputType },
                        fallbackLocale: { type: payload.types.fallbackLocaleInputType },
                    } : {}),
                },
                resolve: (0, findOne_1.default)(global),
            };
            payload.Mutation.fields[`update${formattedLabel}`] = {
                type: global.graphQL.type,
                args: {
                    data: { type: global.graphQL.mutationInputType },
                    draft: { type: graphql_1.GraphQLBoolean },
                    ...(payload.config.localization ? {
                        locale: { type: payload.types.localeInputType },
                    } : {}),
                },
                resolve: (0, update_1.default)(global),
            };
            if (global.versions) {
                const versionGlobalFields = [
                    ...(0, buildGlobalFields_1.buildVersionGlobalFields)(global),
                    {
                        name: 'id',
                        type: 'text',
                    },
                    {
                        name: 'createdAt',
                        label: 'Created At',
                        type: 'date',
                    },
                    {
                        name: 'updatedAt',
                        label: 'Updated At',
                        type: 'date',
                    },
                ];
                global.graphQL.versionType = (0, buildObjectType_1.default)({
                    payload,
                    name: `${formattedLabel}Version`,
                    parentName: `${formattedLabel}Version`,
                    fields: versionGlobalFields,
                    forceNullable: forceNullableObjectType,
                });
                payload.Query.fields[`version${(0, formatName_1.default)(formattedLabel)}`] = {
                    type: global.graphQL.versionType,
                    args: {
                        id: { type: graphql_1.GraphQLString },
                        ...(payload.config.localization ? {
                            locale: { type: payload.types.localeInputType },
                            fallbackLocale: { type: payload.types.fallbackLocaleInputType },
                        } : {}),
                    },
                    resolve: (0, findVersionByID_1.default)(global),
                };
                payload.Query.fields[`versions${formattedLabel}`] = {
                    type: (0, buildPaginatedListType_1.default)(`versions${(0, formatName_1.default)(formattedLabel)}`, global.graphQL.versionType),
                    args: {
                        where: {
                            type: (0, buildWhereInputType_1.default)(`versions${formattedLabel}`, versionGlobalFields, `versions${formattedLabel}`),
                        },
                        ...(payload.config.localization ? {
                            locale: { type: payload.types.localeInputType },
                            fallbackLocale: { type: payload.types.fallbackLocaleInputType },
                        } : {}),
                        page: { type: graphql_1.GraphQLInt },
                        limit: { type: graphql_1.GraphQLInt },
                        sort: { type: graphql_1.GraphQLString },
                    },
                    resolve: (0, findVersions_1.default)(global),
                };
                payload.Mutation.fields[`restoreVersion${(0, formatName_1.default)(formattedLabel)}`] = {
                    type: global.graphQL.type,
                    args: {
                        id: { type: graphql_1.GraphQLString },
                    },
                    resolve: (0, restoreVersion_1.default)(global),
                };
            }
        });
    }
}
exports.default = initGlobalsGraphQL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFzQztBQUN0QyxxQ0FBb0Y7QUFDcEYsb0ZBQTREO0FBQzVELHdFQUE0RTtBQUM1RSx5R0FBaUY7QUFDakYsa0VBQWtEO0FBQ2xELGdFQUFnRDtBQUNoRCxrRkFBa0U7QUFDbEUsNEVBQTREO0FBQzVELGdGQUFnRTtBQUVoRSwyRkFBbUU7QUFDbkUseUdBQWlGO0FBQ2pGLG1HQUEyRTtBQUczRSxTQUFTLGtCQUFrQixDQUFDLE9BQWdCO0lBQzFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25ELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLE1BQU0sRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsR0FDVCxHQUFHLE1BQU0sQ0FBQztZQUVYLE1BQU0sY0FBYyxHQUFHLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUV6QyxNQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUVwQixNQUFNLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxDQUFDLENBQUM7WUFFMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBQSx5QkFBZSxFQUFDO2dCQUNwQyxPQUFPO2dCQUNQLElBQUksRUFBRSxjQUFjO2dCQUNwQixVQUFVLEVBQUUsY0FBYztnQkFDMUIsTUFBTTtnQkFDTixhQUFhLEVBQUUsdUJBQXVCO2FBQ3ZDLENBQUMs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