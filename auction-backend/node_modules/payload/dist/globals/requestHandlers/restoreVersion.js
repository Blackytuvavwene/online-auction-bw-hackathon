"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const formatSuccess_1 = __importDefault(require("../../express/responses/formatSuccess"));
const restoreVersion_1 = __importDefault(require("../operations/restoreVersion"));
function restoreVersionHandler(globalConfig) {
    return async function handler(req, res, next) {
        const options = {
            req,
            globalConfig,
            id: req.params.id,
            depth: Number(req.query.depth),
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
    };
}
exports.default = restoreVersionHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ2xvYmFscy9yZXF1ZXN0SGFuZGxlcnMvcmVzdG9yZVZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFDckMsMEZBQTBFO0FBSTFFLGtGQUEwRDtBQUUxRCxTQUF3QixxQkFBcUIsQ0FBQyxZQUFtQztJQUMvRSxPQUFPLEtBQUssVUFBVSxPQUFPLENBQUMsR0FBbUIsRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDbEYsTUFBTSxPQUFPLEdBQUc7WUFDZCxHQUFHO1lBQ0gsWUFBWTtZQUNaLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMvQixDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSx3QkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDcEMsR0FBRyxJQUFBLHVCQUFxQixFQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQztnQkFDN0QsR0FBRzthQUNKLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFuQkQsd0NBbUJDIn0=