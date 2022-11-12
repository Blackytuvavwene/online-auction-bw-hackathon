"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class MissingCollectionLabel extends APIError_1.default {
    constructor() {
        super('payload.config.collection object is missing label');
    }
}
exports.default = MissingCollectionLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlzc2luZ0NvbGxlY3Rpb25MYWJlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0NvbGxlY3Rpb25MYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFrQztBQUVsQyxNQUFNLHNCQUF1QixTQUFRLGtCQUFRO0lBQzNDO1FBQ0UsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNGO0FBRUQsa0JBQWUsc0JBQXNCLENBQUMifQ==