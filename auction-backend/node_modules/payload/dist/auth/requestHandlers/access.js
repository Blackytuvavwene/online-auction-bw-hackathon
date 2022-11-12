"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const access_1 = __importDefault(require("../operations/access"));
async function accessRequestHandler(req, res, next) {
    try {
        const accessResults = await (0, access_1.default)({
            req,
        });
        return res.status(http_status_1.default.OK)
            .json(accessResults);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = accessRequestHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2FjY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUdyQyxrRUFBMEM7QUFFM0IsS0FBSyxVQUFVLG9CQUFvQixDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3ZHLElBQUk7UUFDRixNQUFNLGFBQWEsR0FBRyxNQUFNLElBQUEsZ0JBQU0sRUFBQztZQUNqQyxHQUFHO1NBQ0osQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDO2FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN4QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBWEQsdUNBV0MifQ==