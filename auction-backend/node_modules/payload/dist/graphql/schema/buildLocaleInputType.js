"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const formatName_1 = __importDefault(require("../utilities/formatName"));
const buildLocaleInputType = (localization) => {
    return new graphql_1.GraphQLEnumType({
        name: 'LocaleInputType',
        values: localization.locales.reduce((values, locale) => ({
            ...values,
            [(0, formatName_1.default)(locale)]: {
                value: locale,
            },
        }), {}),
    });
};
exports.default = buildLocaleInputType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRMb2NhbGVJbnB1dFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvYnVpbGRMb2NhbGVJbnB1dFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBNkQ7QUFFN0QseUVBQWlEO0FBRWpELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxZQUFnQyxFQUF1QyxFQUFFO0lBQ3JHLE9BQU8sSUFBSSx5QkFBZSxDQUFDO1FBQ3pCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RCxHQUFHLE1BQU07WUFDVCxDQUFDLElBQUEsb0JBQVUsRUFBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixLQUFLLEVBQUUsTUFBTTthQUNkO1NBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztLQUNSLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLG9CQUFvQixDQUFDIn0=