"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const formatSuccess_1 = __importDefault(require("../../express/responses/formatSuccess"));
const delete_1 = __importDefault(require("../operations/delete"));
async function deleteHandler(req, res, next) {
    try {
        await (0, delete_1.default)({
            req,
            user: req.user,
            key: req.params.key,
        });
        return res.status(http_status_1.default.OK).json({
            ...(0, formatSuccess_1.default)('Deleted successfully.', 'message'),
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = deleteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZWZlcmVuY2VzL3JlcXVlc3RIYW5kbGVycy9kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFFckMsMEZBQTBFO0FBQzFFLGtFQUFtRDtBQUVwQyxLQUFLLFVBQVUsYUFBYSxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ2hHLElBQUk7UUFDRixNQUFNLElBQUEsZ0JBQWUsRUFBQztZQUNwQixHQUFHO1lBQ0gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRztTQUNwQixDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEMsR0FBRyxJQUFBLHVCQUFxQixFQUFDLHVCQUF1QixFQUFFLFNBQVMsQ0FBQztTQUM3RCxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBZEQsZ0NBY0MifQ==