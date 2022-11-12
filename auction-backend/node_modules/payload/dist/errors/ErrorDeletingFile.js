"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class ErrorDeletingFile extends APIError_1.default {
    constructor() {
        super('There was an error deleting file.', http_status_1.default.INTERNAL_SERVER_ERROR);
    }
}
exports.default = ErrorDeletingFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JEZWxldGluZ0ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL0Vycm9yRGVsZXRpbmdGaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLDBEQUFrQztBQUVsQyxNQUFNLGlCQUFrQixTQUFRLGtCQUFRO0lBQ3RDO1FBQ0UsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLHFCQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyJ9