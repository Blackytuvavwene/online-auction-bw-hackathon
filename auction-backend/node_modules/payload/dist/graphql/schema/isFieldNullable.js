"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../fields/config/types");
const isFieldNullable = (field, force) => {
    const hasReadAccessControl = field.access && field.access.read;
    const condition = field.admin && field.admin.condition;
    return !(force && (0, types_1.fieldAffectsData)(field) && field.required && !field.localized && !condition && !hasReadAccessControl);
};
exports.default = isFieldNullable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGaWVsZE51bGxhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwvc2NoZW1hL2lzRmllbGROdWxsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFpRjtBQUVqRixNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQXlCLEVBQUUsS0FBYyxFQUFXLEVBQUU7SUFDN0UsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQy9ELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDdkQsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUEsd0JBQWdCLEVBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFILENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQyJ9