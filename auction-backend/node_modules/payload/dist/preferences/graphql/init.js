"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-param-reassign */
const graphql_type_json_1 = require("graphql-type-json");
const graphql_1 = require("graphql");
const graphql_scalars_1 = require("graphql-scalars");
const findOne_1 = __importDefault(require("../operations/findOne"));
const update_1 = __importDefault(require("../operations/update"));
const delete_1 = __importDefault(require("../operations/delete"));
function initCollectionsGraphQL(payload) {
    const valueType = graphql_type_json_1.GraphQLJSON;
    const preferenceType = new graphql_1.GraphQLObjectType({
        name: 'Preference',
        fields: {
            key: {
                type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString),
            },
            value: { type: valueType },
            createdAt: { type: new graphql_1.GraphQLNonNull(graphql_scalars_1.DateTimeResolver) },
            updatedAt: { type: new graphql_1.GraphQLNonNull(graphql_scalars_1.DateTimeResolver) },
        },
    });
    payload.Query.fields.Preference = {
        type: preferenceType,
        args: {
            key: { type: graphql_1.GraphQLString },
        },
        resolve: (_, { key }, context) => {
            const { user } = context.req;
            return (0, findOne_1.default)({ key, user, req: context.req });
        },
    };
    payload.Mutation.fields.updatePreference = {
        type: preferenceType,
        args: {
            key: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            value: { type: valueType },
        },
        resolve: (_, { key, value }, context) => {
            const { user } = context.req;
            return (0, update_1.default)({ key, user, req: context.req, value });
        },
    };
    payload.Mutation.fields.deletePreference = {
        type: preferenceType,
        args: {
            key: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        },
        resolve: (_, { key }, context) => {
            const { user } = context.req;
            return (0, delete_1.default)({ key, user, req: context.req });
        },
    };
}
exports.default = initCollectionsGraphQL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9ncmFwaHFsL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMseURBQWdEO0FBQ2hELHFDQUlpQjtBQUNqQixxREFBbUQ7QUFDbkQsb0VBQTRDO0FBQzVDLGtFQUEwQztBQUMxQyxrRUFBbUQ7QUFHbkQsU0FBUyxzQkFBc0IsQ0FBQyxPQUFnQjtJQUM5QyxNQUFNLFNBQVMsR0FBRywrQkFBVyxDQUFDO0lBRTlCLE1BQU0sY0FBYyxHQUFHLElBQUksMkJBQWlCLENBQUM7UUFDM0MsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxJQUFBLHdCQUFjLEVBQUMsdUJBQWEsQ0FBQzthQUNwQztZQUNELEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDMUIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksd0JBQWMsQ0FBQyxrQ0FBZ0IsQ0FBQyxFQUFFO1lBQ3pELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLHdCQUFjLENBQUMsa0NBQWdCLENBQUMsRUFBRTtTQUMxRDtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRztRQUNoQyxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQWEsRUFBRTtTQUM3QjtRQUNELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQy9CLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzdCLE9BQU8sSUFBQSxpQkFBTyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNGLENBQUM7SUFFRixPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRztRQUN6QyxJQUFJLEVBQUUsY0FBYztRQUNwQixJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSx3QkFBYyxDQUFDLHVCQUFhLENBQUMsRUFBRTtZQUNoRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO1NBQzNCO1FBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzdCLE9BQU8sSUFBQSxnQkFBTSxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FDRixDQUFDO0lBRUYsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUc7UUFDekMsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksd0JBQWMsQ0FBQyx1QkFBYSxDQUFDLEVBQUU7U0FDakQ7UUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMvQixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUM3QixPQUFPLElBQUEsZ0JBQWUsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLHNCQUFzQixDQUFDIn0=