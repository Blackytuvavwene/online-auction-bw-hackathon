"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const types_1 = require("./config/types");
const mergeBaseFields = (fields, baseFields) => {
    const mergedFields = [...fields || []];
    baseFields.forEach((baseField) => {
        let matchedIndex = null;
        if ((0, types_1.fieldAffectsData)(baseField)) {
            const match = mergedFields.find((field, i) => {
                if ((0, types_1.fieldAffectsData)(field) && field.name === baseField.name) {
                    matchedIndex = i;
                    return true;
                }
                return false;
            });
            if (match) {
                const matchCopy = { ...match };
                mergedFields.splice(matchedIndex, 1);
                const mergedField = (0, deepmerge_1.default)(baseField, matchCopy);
                if ((0, types_1.fieldHasSubFields)(baseField) && (0, types_1.fieldHasSubFields)(matchCopy)) {
                    mergedField.fields = mergeBaseFields(matchCopy.fields, baseField.fields);
                }
                mergedFields.push(mergedField);
            }
            else {
                mergedFields.push(baseField);
            }
        }
    });
    return mergedFields;
};
exports.default = mergeBaseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VCYXNlRmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZpZWxkcy9tZXJnZUJhc2VGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBOEI7QUFDOUIsMENBQWdHO0FBRWhHLE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBZSxFQUFFLFVBQW1CLEVBQVcsRUFBRTtJQUN4RSxNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUMvQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxJQUFBLHdCQUFnQixFQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQUU7b0JBQzVELFlBQVksR0FBRyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLEtBQUssRUFBRTtnQkFDVCxNQUFNLFNBQVMsR0FBVSxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVyQyxNQUFNLFdBQVcsR0FBRyxJQUFBLG1CQUFLLEVBQVEsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUV2RCxJQUFJLElBQUEseUJBQWlCLEVBQUMsU0FBUyxDQUFDLElBQUksSUFBQSx5QkFBaUIsRUFBQyxTQUFTLENBQUMsRUFBRTtvQkFDL0QsV0FBa0MsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNsRztnQkFFRCxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDOUI7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBZSxDQUFDIn0=