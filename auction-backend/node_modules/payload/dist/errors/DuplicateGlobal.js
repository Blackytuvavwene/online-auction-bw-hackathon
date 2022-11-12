"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class DuplicateGlobal extends APIError_1.default {
    constructor(config) {
        super(`Global label "${config.label}" is already in use`);
    }
}
exports.default = DuplicateGlobal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHVwbGljYXRlR2xvYmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9EdXBsaWNhdGVHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBa0M7QUFFbEMsTUFBTSxlQUFnQixTQUFRLGtCQUFRO0lBQ3BDLFlBQVksTUFBb0I7UUFDOUIsS0FBSyxDQUFDLGlCQUFpQixNQUFNLENBQUMsS0FBSyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRjtBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9