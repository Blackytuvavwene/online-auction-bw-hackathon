"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class InvalidFieldRelationship extends APIError_1.default {
    constructor(field, relationship) {
        super(`Field ${field.label} has invalid relationship '${relationship}'.`);
    }
}
exports.default = InvalidFieldRelationship;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9JbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBa0M7QUFFbEMsTUFBTSx3QkFBeUIsU0FBUSxrQkFBUTtJQUM3QyxZQUFZLEtBQVksRUFBRSxZQUFvQjtRQUM1QyxLQUFLLENBQUMsU0FBUyxLQUFLLENBQUMsS0FBSyw4QkFBOEIsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSx3QkFBd0IsQ0FBQyJ9