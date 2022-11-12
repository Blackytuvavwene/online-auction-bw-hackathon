"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (input) => {
    const words = input.split(' ');
    // Regex word boundaries that work for cyrillic characters - https://stackoverflow.com/a/47062016/1717697
    const wordBoundaryBefore = '(?:(?:[^\\p{L}\\p{N}])|^)'; // Converted to a non-matching group instead of positive lookbehind for Safari
    const wordBoundaryAfter = '(?=[^\\p{L}\\p{N}]|$)';
    const regex = words.reduce((pattern, word, i) => {
        return `${pattern}(?=.*${wordBoundaryBefore}${word}.*${wordBoundaryAfter})${i + 1 === words.length ? '.+' : ''}`;
    }, '');
    return new RegExp(regex, 'i');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZEJvdW5kYXJpZXNSZWdleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvd29yZEJvdW5kYXJpZXNSZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlLENBQUMsS0FBYSxFQUFVLEVBQUU7SUFDdkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvQix5R0FBeUc7SUFDekcsTUFBTSxrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQyxDQUFDLDhFQUE4RTtJQUN0SSxNQUFNLGlCQUFpQixHQUFHLHVCQUF1QixDQUFDO0lBRWxELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzlDLE9BQU8sR0FBRyxPQUFPLFFBQVEsa0JBQWtCLEdBQUcsSUFBSSxLQUFLLGlCQUFpQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMifQ==