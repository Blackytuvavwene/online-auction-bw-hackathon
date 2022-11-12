"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const formatName_1 = __importDefault(require("../utilities/formatName"));
const buildFallbackLocaleInputType = (localization) => new graphql_1.GraphQLEnumType({
    name: 'FallbackLocaleInputType',
    values: [...localization.locales, 'none'].reduce((values, locale) => ({
        ...values,
        [(0, formatName_1.default)(locale)]: {
            value: locale,
        },
    }), {}),
});
exports.default = buildFallbackLocaleInputType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTBDO0FBRTFDLHlFQUFpRDtBQUVqRCxNQUFNLDRCQUE0QixHQUFHLENBQUMsWUFBZ0MsRUFBbUIsRUFBRSxDQUFDLElBQUkseUJBQWUsQ0FBQztJQUM5RyxJQUFJLEVBQUUseUJBQXlCO0lBQy9CLE1BQU0sRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLEdBQUcsTUFBTTtRQUNULENBQUMsSUFBQSxvQkFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDcEIsS0FBSyxFQUFFLE1BQU07U0FDZDtLQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7Q0FDUixDQUFDLENBQUM7QUFFSCxrQkFBZSw0QkFBNEIsQ0FBQyJ9