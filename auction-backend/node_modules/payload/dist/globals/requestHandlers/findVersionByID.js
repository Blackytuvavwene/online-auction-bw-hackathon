"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findVersionByID_1 = __importDefault(require("../operations/findVersionByID"));
function findVersionByIDHandler(globalConfig) {
    return async function handler(req, res, next) {
        const options = {
            req,
            globalConfig,
            id: req.params.id,
            depth: Number(req.query.depth),
        };
        try {
            const doc = await (0, findVersionByID_1.default)(options);
            return res.json(doc);
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.default = findVersionByIDHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFZlcnNpb25CeUlELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dsb2JhbHMvcmVxdWVzdEhhbmRsZXJzL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLG9GQUE0RDtBQUU1RCxTQUF3QixzQkFBc0IsQ0FBQyxZQUFtQztJQUNoRixPQUFPLEtBQUssVUFBVSxPQUFPLENBQUMsR0FBbUIsRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDbEYsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHO1lBQ0gsWUFBWTtZQUNaLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMvQixDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSx5QkFBZSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBaEJELHlDQWdCQyJ9