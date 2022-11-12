"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class MissingFieldInputOptions extends APIError_1.default {
    constructor(field) {
        super(`Field ${field.label} is missing options.`);
    }
}
exports.default = MissingFieldInputOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9NaXNzaW5nRmllbGRJbnB1dE9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBa0M7QUFFbEMsTUFBTSx3QkFBeUIsU0FBUSxrQkFBUTtJQUM3QyxZQUFZLEtBQVk7UUFDdEIsS0FBSyxDQUFDLFNBQVMsS0FBSyxDQUFDLEtBQUssc0JBQXNCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSx3QkFBd0IsQ0FBQyJ9