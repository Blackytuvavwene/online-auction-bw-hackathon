"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const findOne_1 = __importDefault(require("../operations/findOne"));
function findOneHandler(globalConfig) {
    return async function handler(req, res, next) {
        try {
            const { slug } = globalConfig;
            const result = await (0, findOne_1.default)({
                req,
                globalConfig,
                slug,
                depth: Number(req.query.depth),
                draft: req.query.draft === 'true',
            });
            return res.status(http_status_1.default.OK).json(result);
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.default = findOneHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kT25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXFDO0FBSXJDLG9FQUE0QztBQUs1QyxTQUF3QixjQUFjLENBQUMsWUFBbUM7SUFDeEUsT0FBTyxLQUFLLFVBQVUsT0FBTyxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQ2xGLElBQUk7WUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBRTlCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxpQkFBTyxFQUFDO2dCQUMzQixHQUFHO2dCQUNILFlBQVk7Z0JBQ1osSUFBSTtnQkFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUM5QixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssTUFBTTthQUNsQyxDQUFDLENBQUM7WUFFSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWxCRCxpQ0FrQkMifQ==