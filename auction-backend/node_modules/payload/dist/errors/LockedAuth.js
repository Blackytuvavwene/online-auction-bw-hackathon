"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class LockedAuth extends APIError_1.default {
    constructor() {
        super('This user is locked due to having too many failed login attempts.', http_status_1.default.UNAUTHORIZED);
    }
}
exports.default = LockedAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9ja2VkQXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTG9ja2VkQXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFxQztBQUNyQywwREFBa0M7QUFFbEMsTUFBTSxVQUFXLFNBQVEsa0JBQVE7SUFDL0I7UUFDRSxLQUFLLENBQUMsbUVBQW1FLEVBQUUscUJBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RyxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==