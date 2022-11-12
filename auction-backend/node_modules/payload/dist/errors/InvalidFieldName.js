"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class InvalidFieldName extends APIError_1.default {
    constructor(field, fieldName) {
        super(`Field ${field.label} has invalid name '${fieldName}'. Field names can not include periods (.) and must be alphanumeric.`);
    }
}
exports.default = InvalidFieldName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZEZpZWxkTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZEZpZWxkTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDBEQUFrQztBQUVsQyxNQUFNLGdCQUFpQixTQUFRLGtCQUFRO0lBQ3JDLFlBQVksS0FBWSxFQUFFLFNBQWlCO1FBQ3pDLEtBQUssQ0FBQyxTQUFTLEtBQUssQ0FBQyxLQUFLLHNCQUFzQixTQUFTLHNFQUFzRSxDQUFDLENBQUM7SUFDbkksQ0FBQztDQUNGO0FBRUQsa0JBQWUsZ0JBQWdCLENBQUMifQ==