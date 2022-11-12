"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class InvalidConfiguration extends APIError_1.default {
    constructor(message) {
        super(message, http_status_1.default.INTERNAL_SERVER_ERROR);
    }
}
exports.default = InvalidConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZENvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL0ludmFsaWRDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLDBEQUFrQztBQUVsQyxNQUFNLG9CQUFxQixTQUFRLGtCQUFRO0lBQ3pDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxFQUFFLHFCQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxvQkFBb0IsQ0FBQyJ9