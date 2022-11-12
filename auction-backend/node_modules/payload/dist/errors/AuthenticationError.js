"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class AuthenticationError extends APIError_1.default {
    constructor() {
        super('The email or password provided is incorrect.', http_status_1.default.UNAUTHORIZED);
    }
}
exports.default = AuthenticationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aGVudGljYXRpb25FcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvQXV0aGVudGljYXRpb25FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFxQztBQUNyQywwREFBa0M7QUFFbEMsTUFBTSxtQkFBb0IsU0FBUSxrQkFBUTtJQUN4QztRQUNFLEtBQUssQ0FBQyw4Q0FBOEMsRUFBRSxxQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FDRjtBQUVELGtCQUFlLG1CQUFtQixDQUFDIn0=