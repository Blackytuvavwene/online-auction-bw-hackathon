"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const logout_1 = __importDefault(require("../operations/logout"));
async function logoutHandler(req, res, next) {
    try {
        const message = await (0, logout_1.default)({
            collection: req.collection,
            res,
            req,
        });
        return res.status(http_status_1.default.OK).json({ message });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = logoutHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2xvZ291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUVyQyxrRUFBMEM7QUFFM0IsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUNoRyxJQUFJO1FBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLGdCQUFNLEVBQUM7WUFDM0IsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEdBQUc7WUFDSCxHQUFHO1NBQ0osQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUNwRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBWkQsZ0NBWUMifQ==