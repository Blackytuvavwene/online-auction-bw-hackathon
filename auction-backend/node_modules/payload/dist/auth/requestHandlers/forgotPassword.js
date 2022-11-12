"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const forgotPassword_1 = __importDefault(require("../operations/forgotPassword"));
async function forgotPasswordHandler(req, res, next) {
    try {
        await (0, forgotPassword_1.default)({
            req,
            collection: req.collection,
            data: { email: req.body.email },
            disableEmail: req.body.disableEmail,
            expiration: req.body.expiration,
        });
        return res.status(http_status_1.default.OK)
            .json({
            message: 'Success',
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = forgotPasswordHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9yZXF1ZXN0SGFuZGxlcnMvZm9yZ290UGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFFckMsa0ZBQTBEO0FBRTNDLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUN4RyxJQUFJO1FBQ0YsTUFBTSxJQUFBLHdCQUFjLEVBQUM7WUFDbkIsR0FBRztZQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsWUFBWSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQ2hDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQzthQUM3QixJQUFJLENBQUM7WUFDSixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDLENBQUM7S0FDTjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBakJELHdDQWlCQyJ9