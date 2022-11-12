"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const APIError_1 = __importDefault(require("./APIError"));
class Forbidden extends APIError_1.default {
    constructor() {
        super('You are not allowed to perform this action.', http_status_1.default.FORBIDDEN);
    }
}
exports.default = Forbidden;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yYmlkZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9Gb3JiaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBcUM7QUFDckMsMERBQWtDO0FBRWxDLE1BQU0sU0FBVSxTQUFRLGtCQUFRO0lBQzlCO1FBQ0UsS0FBSyxDQUFDLDZDQUE2QyxFQUFFLHFCQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNGO0FBRUQsa0JBQWUsU0FBUyxDQUFDIn0=