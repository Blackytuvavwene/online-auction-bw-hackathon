"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const formatSuccess_1 = __importDefault(require("../../express/responses/formatSuccess"));
const restoreVersion_1 = __importDefault(require("../operations/restoreVersion"));
async function restoreVersionHandler(req, res, next) {
    const options = {
        req,
        collection: req.collection,
        id: req.params.id,
        depth: Number(req.query.depth),
        payload: req.payload,
    };
    try {
        const doc = await (0, restoreVersion_1.default)(options);
        return res.status(http_status_1.default.OK).json({
            ...(0, formatSuccess_1.default)('Restored successfully.', 'message'),
            doc,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = restoreVersionHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvcmVxdWVzdEhhbmRsZXJzL3Jlc3RvcmVWZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXFDO0FBR3JDLDBGQUEwRTtBQUMxRSxrRkFBMEQ7QUFPM0MsS0FBSyxVQUFVLHFCQUFxQixDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3hHLE1BQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRztRQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtRQUMxQixFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO0tBQ3JCLENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFBLHdCQUFjLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BDLEdBQUcsSUFBQSx1QkFBcUIsRUFBQyx3QkFBd0IsRUFBRSxTQUFTLENBQUM7WUFDN0QsR0FBRztTQUNKLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUM7QUFsQkQsd0NBa0JDIn0=