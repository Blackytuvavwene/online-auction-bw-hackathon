"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class DuplicateCollection extends APIError_1.default {
    constructor(propertyName, duplicates) {
        super(`Collection ${propertyName} already in use: "${duplicates.join(', ')}"`);
    }
}
exports.default = DuplicateCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHVwbGljYXRlQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvRHVwbGljYXRlQ29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFrQztBQUVsQyxNQUFNLG1CQUFvQixTQUFRLGtCQUFRO0lBQ3hDLFlBQVksWUFBb0IsRUFBRSxVQUFvQjtRQUNwRCxLQUFLLENBQUMsY0FBYyxZQUFZLHFCQUFxQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQyJ9