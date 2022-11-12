"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const withNullableType = (field, type, forceNullable = false) => {
    const hasReadAccessControl = field.access && field.access.read;
    const condition = field.admin && field.admin.condition;
    if (!forceNullable && field.required && !field.localized && !condition && !hasReadAccessControl) {
        return new graphql_1.GraphQLNonNull(type);
    }
    return type;
};
exports.default = withNullableType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aE51bGxhYmxlVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoTnVsbGFibGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXNEO0FBR3RELE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUF5QixFQUFFLElBQWlCLEVBQUUsYUFBYSxHQUFHLEtBQUssRUFBZSxFQUFFO0lBQzVHLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMvRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBRXZELElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtRQUMvRixPQUFPLElBQUksd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMifQ==