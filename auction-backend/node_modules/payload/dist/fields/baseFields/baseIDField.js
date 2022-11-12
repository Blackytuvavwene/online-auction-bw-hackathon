"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseIDField = void 0;
const bson_objectid_1 = __importDefault(require("bson-objectid"));
const generateID = ({ value }) => (value || new bson_objectid_1.default().toHexString());
exports.baseIDField = {
    name: 'id',
    label: 'ID',
    type: 'text',
    hooks: {
        beforeChange: [
            generateID,
        ],
    },
    admin: {
        disabled: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUlERmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmllbGRzL2Jhc2VGaWVsZHMvYmFzZUlERmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0VBQXFDO0FBR3JDLE1BQU0sVUFBVSxHQUFjLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSx1QkFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUV4RSxRQUFBLFdBQVcsR0FBVTtJQUNoQyxJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxJQUFJO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUU7UUFDTCxZQUFZLEVBQUU7WUFDWixVQUFVO1NBQ1g7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FDRixDQUFDIn0=