"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const graphQLHandler = (req, res) => {
    const { payload } = req;
    payload.errorResponses = null;
    return (0, express_graphql_1.graphqlHTTP)(async (request, response, { variables }) => ({
        schema: payload.schema,
        customFormatErrorFn: payload.customFormatErrorFn,
        extensions: payload.extensions,
        context: { req, res },
        validationRules: payload.validationRules(variables),
    }));
};
exports.default = graphQLHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhRTEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9ncmFwaFFMSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE4QztBQUk5QyxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUV4QixPQUFPLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUU5QixPQUFPLElBQUEsNkJBQVcsRUFDaEIsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLG1CQUFtQjtRQUNoRCxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7UUFDOUIsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUNyQixlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7S0FDcEQsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==