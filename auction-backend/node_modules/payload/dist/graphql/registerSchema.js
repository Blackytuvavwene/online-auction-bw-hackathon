"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
const GraphQL = __importStar(require("graphql"));
const graphql_1 = require("graphql");
const graphql_query_complexity_1 = __importStar(require("graphql-query-complexity"));
const buildLocaleInputType_1 = __importDefault(require("./schema/buildLocaleInputType"));
const buildFallbackLocaleInputType_1 = __importDefault(require("./schema/buildFallbackLocaleInputType"));
const init_1 = __importDefault(require("../collections/graphql/init"));
const init_2 = __importDefault(require("../globals/graphql/init"));
const init_3 = __importDefault(require("../preferences/graphql/init"));
const buildPoliciesType_1 = __importDefault(require("./schema/buildPoliciesType"));
const access_1 = __importDefault(require("../auth/graphql/resolvers/access"));
const errorHandler_1 = __importDefault(require("./errorHandler"));
function registerSchema(payload) {
    payload.types = {
        blockTypes: {},
        blockInputTypes: {},
    };
    if (payload.config.localization) {
        payload.types.localeInputType = (0, buildLocaleInputType_1.default)(payload.config.localization);
        payload.types.fallbackLocaleInputType = (0, buildFallbackLocaleInputType_1.default)(payload.config.localization);
    }
    payload.Query = {
        name: 'Query',
        fields: {},
    };
    payload.Mutation = {
        name: 'Mutation',
        fields: {},
    };
    (0, init_1.default)(payload);
    (0, init_2.default)(payload);
    (0, init_3.default)(payload);
    payload.Query.fields.Access = {
        type: (0, buildPoliciesType_1.default)(payload),
        resolve: access_1.default,
    };
    if (typeof payload.config.graphQL.queries === 'function') {
        const customQueries = payload.config.graphQL.queries(GraphQL, payload);
        payload.Query = {
            ...payload.Query,
            fields: {
                ...payload.Query.fields,
                ...(customQueries || {}),
            },
        };
    }
    if (typeof payload.config.graphQL.mutations === 'function') {
        const customMutations = payload.config.graphQL.mutations(GraphQL, payload);
        payload.Mutation = {
            ...payload.Mutation,
            fields: {
                ...payload.Mutation.fields,
                ...(customMutations || {}),
            },
        };
    }
    const query = new graphql_1.GraphQLObjectType(payload.Query);
    const mutation = new graphql_1.GraphQLObjectType(payload.Mutation);
    const schema = {
        query,
        mutation,
    };
    payload.schema = new graphql_1.GraphQLSchema(schema);
    payload.extensions = async (info) => {
        const { result } = info;
        if (result.errors) {
            payload.errorIndex = 0;
            const afterErrorHook = typeof payload.config.hooks.afterError === 'function' ? payload.config.hooks.afterError : null;
            payload.errorResponses = await (0, errorHandler_1.default)(info, payload.config.debug, afterErrorHook);
        }
        return null;
    };
    payload.customFormatErrorFn = (error) => {
        if (payload.errorResponses && payload.errorResponses[payload.errorIndex]) {
            const response = payload.errorResponses[payload.errorIndex];
            payload.errorIndex += 1;
            return response;
        }
        return error;
    };
    payload.validationRules = (variables) => ([
        (0, graphql_query_complexity_1.default)({
            estimators: [
                (0, graphql_query_complexity_1.fieldExtensionsEstimator)(),
                (0, graphql_query_complexity_1.simpleEstimator)({ defaultComplexity: 1 }), // Fallback if complexity not set
            ],
            maximumComplexity: payload.config.graphQL.maxComplexity,
            variables,
            // onComplete: (complexity) => { console.log('Query Complexity:', complexity); },
        }),
    ]);
}
exports.default = registerSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9yZWdpc3RlclNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGlEQUFtQztBQUNuQyxxQ0FBMkQ7QUFDM0QscUZBQXNHO0FBRXRHLHlGQUFpRTtBQUNqRSx5R0FBaUY7QUFDakYsdUVBQTBEO0FBQzFELG1FQUFrRDtBQUNsRCx1RUFBMEQ7QUFDMUQsbUZBQTJEO0FBQzNELDhFQUE4RDtBQUM5RCxrRUFBMEM7QUFFMUMsU0FBd0IsY0FBYyxDQUFDLE9BQWdCO0lBQ3JELE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDZCxVQUFVLEVBQUUsRUFBRTtRQUNkLGVBQWUsRUFBRSxFQUFFO0tBQ3BCLENBQUM7SUFFRixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUEsOEJBQW9CLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRixPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLElBQUEsc0NBQTRCLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNuRztJQUVELE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDZCxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLE9BQU8sQ0FBQyxRQUFRLEdBQUc7UUFDakIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0lBRUYsSUFBQSxjQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsSUFBQSxjQUFXLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsSUFBQSxjQUFlLEVBQUMsT0FBTyxDQUFDLENBQUM7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