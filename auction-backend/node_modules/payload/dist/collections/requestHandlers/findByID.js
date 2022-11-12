"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findByID_1 = __importDefault(require("../operations/findByID"));
async function findByIDHandler(req, res, next) {
    try {
        const doc = await (0, findByID_1.default)({
            req,
            collection: req.collection,
            id: req.params.id,
            depth: Number(req.query.depth),
            draft: req.query.draft === 'true',
        });
        return res.json(doc);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = findByIDHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEJ5SUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvcmVxdWVzdEhhbmRsZXJzL2ZpbmRCeUlELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0Esc0VBQThDO0FBTy9CLEtBQUssVUFBVSxlQUFlLENBQUMsR0FBbUIsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDbEcsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSxrQkFBUSxFQUFDO1lBQ3pCLEdBQUc7WUFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNO1NBQ2xDLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBYkQsa0NBYUMifQ==