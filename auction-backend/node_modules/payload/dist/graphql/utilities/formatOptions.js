"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../fields/config/types");
const formatName_1 = __importDefault(require("./formatName"));
const formatOptions = (field) => {
    return field.options.reduce((values, option) => {
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
    }, {});
};
exports.default = formatOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0T3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXRPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQW9GO0FBQ3BGLDhEQUFzQztBQUV0QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQStCLEVBQUUsRUFBRTtJQUN4RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQzdDLElBQUksSUFBQSxzQkFBYyxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU87Z0JBQ0wsR0FBRyxNQUFNO2dCQUNULENBQUMsSUFBQSxvQkFBVSxFQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUMxQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7aUJBQ3BCO2FBQ0YsQ0FBQztTQUNIO1FBRUQsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULENBQUMsSUFBQSxvQkFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFDO0FBR0Ysa0JBQWUsYUFBYSxDQUFDIn0=