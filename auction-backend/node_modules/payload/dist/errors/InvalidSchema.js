"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class InvalidSchema extends APIError_1.default {
    constructor(message, results) {
        super(message, http_status_1.default.INTERNAL_SERVER_ERROR, results);
    }
}
exports.default = InvalidSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZFNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFxQztBQUNyQywwREFBa0M7QUFFbEMsTUFBTSxhQUFjLFNBQVEsa0JBQVE7SUFDbEMsWUFBWSxPQUFlLEVBQUUsT0FBWTtRQUN2QyxLQUFLLENBQUMsT0FBTyxFQUFFLHFCQUFVLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=