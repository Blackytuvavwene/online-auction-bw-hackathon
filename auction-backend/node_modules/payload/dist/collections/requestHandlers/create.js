"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const formatSuccess_1 = __importDefault(require("../../express/responses/formatSuccess"));
const create_1 = __importDefault(require("../operations/create"));
async function createHandler(req, res, next) {
    try {
        const doc = await (0, create_1.default)({
            req,
            collection: req.collection,
            data: req.body,
            depth: Number(req.query.depth),
            draft: req.query.draft === 'true',
        });
        return res.status(http_status_1.default.CREATED).json({
            ...(0, formatSuccess_1.default)(`${req.collection.config.labels.singular} successfully created.`, 'message'),
            doc,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = createHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL3JlcXVlc3RIYW5kbGVycy9jcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBcUM7QUFHckMsMEZBQTBFO0FBRTFFLGtFQUEwQztBQU8zQixLQUFLLFVBQVUsYUFBYSxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ2hHLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0JBQU0sRUFBQztZQUN2QixHQUFHO1lBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLE1BQU07U0FDbEMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsSUFBQSx1QkFBcUIsRUFBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLHdCQUF3QixFQUFFLFNBQVMsQ0FBQztZQUNyRyxHQUFHO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQWpCRCxnQ0FpQkMifQ==