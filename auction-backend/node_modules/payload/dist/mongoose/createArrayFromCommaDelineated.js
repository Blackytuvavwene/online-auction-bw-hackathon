"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArrayFromCommaDelineated = void 0;
function createArrayFromCommaDelineated(input) {
    if (Array.isArray(input))
        return input;
    if (input.indexOf(',') > -1) {
        return input.split(',');
    }
    return [input];
}
exports.createArrayFromCommaDelineated = createArrayFromCommaDelineated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vbmdvb3NlL2NyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQiw4QkFBOEIsQ0FBQyxLQUFhO0lBQzFELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN2QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDM0IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFORCx3RUFNQyJ9