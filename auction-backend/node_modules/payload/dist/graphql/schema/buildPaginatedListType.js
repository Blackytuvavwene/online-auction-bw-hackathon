"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const buildPaginatedListType = (name, docType) => new graphql_1.GraphQLObjectType({
    name,
    fields: {
        docs: {
            type: new graphql_1.GraphQLList(docType),
        },
        totalDocs: { type: graphql_1.GraphQLInt },
        offset: { type: graphql_1.GraphQLInt },
        limit: { type: graphql_1.GraphQLInt },
        totalPages: { type: graphql_1.GraphQLInt },
        page: { type: graphql_1.GraphQLInt },
        pagingCounter: { type: graphql_1.GraphQLInt },
        hasPrevPage: { type: graphql_1.GraphQLBoolean },
        hasNextPage: { type: graphql_1.GraphQLBoolean },
        prevPage: { type: graphql_1.GraphQLInt },
        nextPage: { type: graphql_1.GraphQLInt },
    },
});
exports.default = buildPaginatedListType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFGO0FBRXJGLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLDJCQUFpQixDQUFDO0lBQ3RFLElBQUk7SUFDSixNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsSUFBSSxxQkFBVyxDQUFDLE9BQU8sQ0FBQztTQUMvQjtRQUNELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQy9CLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQzVCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQzNCLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQ2hDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQzFCLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQ25DLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSx3QkFBYyxFQUFFO1FBQ3JDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSx3QkFBYyxFQUFFO1FBQ3JDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO1FBQzlCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVSxFQUFFO0tBQy9CO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsc0JBQXNCLENBQUMifQ==