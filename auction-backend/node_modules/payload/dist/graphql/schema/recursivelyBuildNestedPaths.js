"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../fields/config/types");
const fieldToWhereInputSchemaMap_1 = __importDefault(require("./fieldToWhereInputSchemaMap"));
const recursivelyBuildNestedPaths = (parentName, field) => {
    const nestedPaths = field.fields.reduce((nestedFields, nestedField) => {
        if (!(0, types_1.fieldIsPresentationalOnly)(nestedField)) {
            const getFieldSchema = (0, fieldToWhereInputSchemaMap_1.default)(parentName)[nestedField.type];
            const nestedFieldName = (0, types_1.fieldAffectsData)(nestedField) ? `${field.name}__${nestedField.name}` : undefined;
            if (getFieldSchema) {
                const fieldSchema = getFieldSchema({
                    ...nestedField,
                    name: nestedFieldName,
                });
                if (Array.isArray(fieldSchema)) {
                    return [
                        ...nestedFields,
                        ...fieldSchema,
                    ];
                }
                return [
                    ...nestedFields,
                    {
                        key: nestedFieldName,
                        type: fieldSchema,
                    },
                ];
            }
        }
        return nestedFields;
    }, []);
    return nestedPaths;
};
exports.default = recursivelyBuildNestedPaths;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwvc2NoZW1hL3JlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUttQztBQUNuQyw4RkFBNEQ7QUFFNUQsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLFVBQWtCLEVBQUUsS0FBOEMsRUFBRSxFQUFFO0lBQ3pHLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxFQUFFO1FBQ3BFLElBQUksQ0FBQyxJQUFBLGlDQUF5QixFQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzNDLE1BQU0sY0FBYyxHQUFHLElBQUEsb0NBQWdCLEVBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sZUFBZSxHQUFHLElBQUEsd0JBQWdCLEVBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUV6RyxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDO29CQUNqQyxHQUFHLFdBQVc7b0JBQ2QsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCLENBQUMsQ0FBQztnQkFFSCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzlCLE9BQU87d0JBQ0wsR0FBRyxZQUFZO3dCQUNmLEdBQUcsV0FBVztxQkFDZixDQUFDO2lCQUNIO2dCQUVELE9BQU87b0JBQ0wsR0FBRyxZQUFZO29CQUNmO3dCQUNFLEdBQUcsRUFBRSxlQUFlO3dCQUNwQixJQUFJLEVBQUUsV0FBVztxQkFDbEI7aUJBQ0YsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixrQkFBZSwyQkFBMkIsQ0FBQyJ9