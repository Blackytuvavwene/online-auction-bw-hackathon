"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const resetPassword_1 = __importDefault(require("../operations/resetPassword"));
async function resetPasswordHandler(req, res, next) {
    try {
        const result = await (0, resetPassword_1.default)({
            collection: req.collection,
            data: req.body,
            req,
            res,
        });
        return res.status(http_status_1.default.OK)
            .json({
            message: 'Password reset successfully.',
            token: result.token,
            user: result.user,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = resetPasswordHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZXNldFBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXFDO0FBRXJDLGdGQUF3RDtBQUV4RCxLQUFLLFVBQVUsb0JBQW9CLENBQUMsR0FBbUIsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDeEYsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSx1QkFBYSxFQUFDO1lBQ2pDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxHQUFHO1lBQ0gsR0FBRztTQUNKLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQzthQUM3QixJQUFJLENBQUM7WUFDSixPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQUVELGtCQUFlLG9CQUFvQixDQUFDIn0=