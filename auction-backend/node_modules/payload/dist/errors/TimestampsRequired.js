"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("./APIError"));
class TimestampsRequired extends APIError_1.default {
    constructor(collection) {
        super(`Timestamps are required in the collection ${collection.slug} because you have opted in to Versions.`);
    }
}
exports.default = TimestampsRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXN0YW1wc1JlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9UaW1lc3RhbXBzUmVxdWlyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwwREFBa0M7QUFFbEMsTUFBTSxrQkFBbUIsU0FBUSxrQkFBUTtJQUN2QyxZQUFZLFVBQTRCO1FBQ3RDLEtBQUssQ0FBQyw2Q0FBNkMsVUFBVSxDQUFDLElBQUkseUNBQXlDLENBQUMsQ0FBQztJQUMvRyxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9