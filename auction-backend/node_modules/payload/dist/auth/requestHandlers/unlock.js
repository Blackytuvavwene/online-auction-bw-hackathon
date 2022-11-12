"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const unlock_1 = __importDefault(require("../operations/unlock"));
async function unlockHandler(req, res, next) {
    try {
        await (0, unlock_1.default)({
            req,
            collection: req.collection,
            data: { email: req.body.email },
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
exports.default = unlockHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvcmVxdWVzdEhhbmRsZXJzL3VubG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUVyQyxrRUFBMEM7QUFFM0IsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUNoRyxJQUFJO1FBQ0YsTUFBTSxJQUFBLGdCQUFNLEVBQUM7WUFDWCxHQUFHO1lBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUNoQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUM7YUFDN0IsSUFBSSxDQUFDO1lBQ0osT0FBTyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO0tBQ047SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQWZELGdDQWVDIn0=