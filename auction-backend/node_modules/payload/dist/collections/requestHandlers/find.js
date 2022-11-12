"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const find_1 = __importDefault(require("../operations/find"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findHandler(req, res, next) {
    try {
        let page;
        if (typeof req.query.page === 'string') {
            const parsedPage = parseInt(req.query.page, 10);
            if (!Number.isNaN(parsedPage)) {
                page = parsedPage;
            }
        }
        const result = await (0, find_1.default)({
            req,
            collection: req.collection,
            where: req.query.where,
            page,
            limit: Number(req.query.limit),
            sort: req.query.sort,
            depth: Number(req.query.depth),
            draft: req.query.draft === 'true',
        });
        return res.status(http_status_1.default.OK).json(result);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = findHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUlyQyw4REFBc0M7QUFHdEMsOERBQThEO0FBQy9DLEtBQUssVUFBVSxXQUFXLENBQTZCLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzFILElBQUk7UUFDRixJQUFJLElBQXdCLENBQUM7UUFFN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN0QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxVQUFVLENBQUM7YUFDbkI7U0FDRjtRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxjQUFJLEVBQUM7WUFDeEIsR0FBRztZQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFjO1lBQy9CLElBQUk7WUFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWM7WUFDOUIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM5QixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssTUFBTTtTQUNsQyxDQUFDLENBQUM7UUFFSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0M7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQTNCRCw4QkEyQkMifQ==