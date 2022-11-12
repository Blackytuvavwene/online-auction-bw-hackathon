"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const verifyEmail_1 = __importDefault(require("../operations/verifyEmail"));
async function verifyEmailHandler(req, res, next) {
    try {
        await (0, verifyEmail_1.default)({
            collection: req.collection,
            token: req.params.token,
        });
        return res.status(http_status_1.default.OK)
            .json({
            message: 'Email verified successfully.',
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = verifyEmailHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9yZXF1ZXN0SGFuZGxlcnMvdmVyaWZ5RW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFFckMsNEVBQW9EO0FBRXBELEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUN0RixJQUFJO1FBQ0YsTUFBTSxJQUFBLHFCQUFXLEVBQUM7WUFDaEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDO2FBQzdCLElBQUksQ0FBQztZQUNKLE9BQU8sRUFBRSw4QkFBOEI7U0FDeEMsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQUVELGtCQUFlLGtCQUFrQixDQUFDIn0=