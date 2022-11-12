"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const errors_1 = require("../../errors");
const delete_1 = __importDefault(require("../operations/delete"));
async function deleteHandler(req, res, next) {
    try {
        const doc = await (0, delete_1.default)({
            req,
            collection: req.collection,
            id: req.params.id,
            depth: parseInt(String(req.query.depth), 10),
        });
        if (!doc) {
            return res.status(http_status_1.default.NOT_FOUND).json(new errors_1.NotFound());
        }
        return res.status(http_status_1.default.OK).send(doc);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = deleteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL3JlcXVlc3RIYW5kbGVycy9kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFFckMseUNBQXdDO0FBRXhDLGtFQUFtRDtBQU9wQyxLQUFLLFVBQVUsYUFBYSxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ2hHLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0JBQWUsRUFBQztZQUNoQyxHQUFHO1lBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzVDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUM7QUFqQkQsZ0NBaUJDIn0=