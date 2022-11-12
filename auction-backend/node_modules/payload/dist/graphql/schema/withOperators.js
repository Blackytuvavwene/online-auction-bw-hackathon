"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const combineParentName_1 = __importDefault(require("../utilities/combineParentName"));
const withOperators = (field, type, parentName, operators) => {
    const name = `${(0, combineParentName_1.default)(parentName, field.name)}_operator`;
    const listOperators = ['in', 'not_in', 'all'];
    if (!field.required)
        operators.push('exists');
    return new graphql_1.GraphQLInputObjectType({
        name,
        fields: operators.reduce((fields, operator) => {
            let gqlType;
            if (listOperators.indexOf(operator) > -1) {
                gqlType = new graphql_1.GraphQLList(type);
            }
            else if (operator === 'exists') {
                gqlType = graphql_1.GraphQLBoolean;
            }
            else {
                gqlType = type;
            }
            return {
                ...fields,
                [operator]: {
                    type: gqlType,
                },
            };
        }, {}),
    });
};
exports.default = withOperators;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aE9wZXJhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoT3BlcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQTJGO0FBRTNGLHVGQUErRDtBQUUvRCxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQXlCLEVBQUUsSUFBaUIsRUFBRSxVQUFrQixFQUFFLFNBQW1CLEVBQTBCLEVBQUU7SUFDdEksTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFBLDJCQUFpQixFQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRSxNQUFNLGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU5QyxPQUFPLElBQUksZ0NBQXNCLENBQUM7UUFDaEMsSUFBSTtRQUNKLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzVDLElBQUksT0FBb0IsQ0FBQztZQUN6QixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsd0JBQWMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO1lBQ0QsT0FBTztnQkFDTCxHQUFHLE1BQU07Z0JBQ1QsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDVixJQUFJLEVBQUUsT0FBTztpQkFDZDthQUNGLENBQUM7UUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ1AsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsYUFBYSxDQUFDIn0=