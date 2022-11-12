"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class UnauthorizedError extends APIError_1.default {
    constructor() {
        super('Unauthorized, you must be logged in to make this request.', http_status_1.default.UNAUTHORIZED);
    }
}
exports.default = UnauthorizedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5hdGhvcml6ZWRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvVW5hdGhvcml6ZWRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFxQztBQUNyQywwREFBa0M7QUFFbEMsTUFBTSxpQkFBa0IsU0FBUSxrQkFBUTtJQUN0QztRQUNFLEtBQUssQ0FBQywyREFBMkQsRUFBRSxxQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlGLENBQUM7Q0FDRjtBQUVELGtCQUFlLGlCQUFpQixDQUFDIn0=