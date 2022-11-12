"use strict";
/**
  * If there is an incoming row id,
  * and it matches the existing sibling doc id,
  * this is an existing row, so it should be merged.
  * Otherwise, return an empty object.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExistingRowDoc = void 0;
const getExistingRowDoc = (incomingRow, existingRow) => {
    if (incomingRow.id && incomingRow.id === (existingRow === null || existingRow === void 0 ? void 0 : existingRow.id)) {
        return existingRow;
    }
    return {};
};
exports.getExistingRowDoc = getExistingRowDoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RXhpc3RpbmdSb3dEb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZS9nZXRFeGlzdGluZ1Jvd0RvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7OztBQUVJLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFvQyxFQUFFLFdBQXFDLEVBQTJCLEVBQUU7SUFDeEksSUFBSSxXQUFXLENBQUMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLE1BQUssV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEVBQUUsQ0FBQSxFQUFFO1FBQ3hELE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFOVyxRQUFBLGlCQUFpQixxQkFNNUIifQ==