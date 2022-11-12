"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../fields/config/types");
const APIError_1 = __importDefault(require("./APIError"));
class MissingFieldType extends APIError_1.default {
    constructor(field) {
        super(`Field${(0, types_1.fieldAffectsData)(field) ? ` "${field.name}"` : ''} is either missing a field type or it does not match an available field type`);
    }
}
exports.default = MissingFieldType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlzc2luZ0ZpZWxkVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpZWxkVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUFpRTtBQUNqRSwwREFBa0M7QUFFbEMsTUFBTSxnQkFBaUIsU0FBUSxrQkFBUTtJQUNyQyxZQUFZLEtBQVk7UUFDdEIsS0FBSyxDQUFDLFFBQVEsSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsOEVBQThFLENBQUMsQ0FBQztJQUNqSixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQyJ9