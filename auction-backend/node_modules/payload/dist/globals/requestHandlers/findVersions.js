"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const findVersions_1 = __importDefault(require("../operations/findVersions"));
function findVersionsHandler(global) {
    return async function handler(req, res, next) {
        try {
            let page;
            if (typeof req.query.page === 'string') {
                const parsedPage = parseInt(req.query.page, 10);
                if (!Number.isNaN(parsedPage)) {
                    page = parsedPage;
                }
            }
            const options = {
                req,
                globalConfig: global,
                where: req.query.where,
                page,
                limit: Number(req.query.limit),
                sort: req.query.sort,
                depth: Number(req.query.depth),
            };
            const result = await (0, findVersions_1.default)(options);
            return res.status(http_status_1.default.OK).json(result);
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.default = findVersionsHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFZlcnNpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dsb2JhbHMvcmVxdWVzdEhhbmRsZXJzL2ZpbmRWZXJzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUtyQyw4RUFBc0Q7QUFHdEQsU0FBd0IsbUJBQW1CLENBQUMsTUFBNkI7SUFDdkUsT0FBTyxLQUFLLFVBQVUsT0FBTyxDQUE2QixHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUM5RyxJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUM7WUFFVCxJQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRWhELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUM3QixJQUFJLEdBQUcsVUFBVSxDQUFDO2lCQUNuQjthQUNGO1lBRUQsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsR0FBRztnQkFDSCxZQUFZLEVBQUUsTUFBTTtnQkFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBYztnQkFDL0IsSUFBSTtnQkFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjO2dCQUM5QixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQy9CLENBQUM7WUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsc0JBQVksRUFBQyxPQUFPLENBQUMsQ0FBQztZQUUzQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0M7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTlCRCxzQ0E4QkMifQ==