"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function init(args) {
    const { Model, } = args;
    const count = await Model.countDocuments({});
    return count >= 1;
}
exports.default = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLEtBQUssVUFBVSxJQUFJLENBQUMsSUFBcUQ7SUFDdkUsTUFBTSxFQUNKLEtBQUssR0FDTixHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU3QyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELGtCQUFlLElBQUksQ0FBQyJ9