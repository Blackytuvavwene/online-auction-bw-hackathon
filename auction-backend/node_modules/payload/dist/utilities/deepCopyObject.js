"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deepCopyObject = (inObject) => {
    if (inObject instanceof Date)
        return inObject;
    if (typeof inObject !== 'object' || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    const outObject = Array.isArray(inObject) ? [] : {};
    Object.keys(inObject).forEach((key) => {
        const value = inObject[key];
        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = (typeof value === 'object' && value !== null) ? deepCopyObject(value) : value;
    });
    return outObject;
};
exports.default = deepCopyObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcENvcHlPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2RlZXBDb3B5T2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxjQUFjLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUNsQyxJQUFJLFFBQVEsWUFBWSxJQUFJO1FBQUUsT0FBTyxRQUFRLENBQUM7SUFFOUMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyRCxPQUFPLFFBQVEsQ0FBQyxDQUFDLGdEQUFnRDtLQUNsRTtJQUVELCtDQUErQztJQUMvQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QiwrREFBK0Q7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakcsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==