"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidID = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const isValidID = (value, type) => {
    if (type === 'ObjectID') {
        return bson_objectid_1.default.isValid(String(value));
    }
    return (type === 'text' && typeof value === 'string')
        || (type === 'number' && typeof value === 'number' && !Number.isNaN(value));
};
exports.isValidID = isValidID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZElELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9pc1ZhbGlkSUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0VBQXFDO0FBRTlCLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBc0IsRUFBRSxJQUFvQyxFQUFXLEVBQUU7SUFDakcsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1FBQ3ZCLE9BQU8sdUJBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFDRCxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7V0FDaEQsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUM7QUFOVyxRQUFBLFNBQVMsYUFNcEIifQ==