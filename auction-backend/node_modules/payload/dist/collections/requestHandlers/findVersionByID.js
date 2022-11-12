"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findVersionByID_1 = __importDefault(require("../operations/findVersionByID"));
async function findVersionByIDHandler(req, res, next) {
    const options = {
        req,
        collection: req.collection,
        id: req.params.id,
        payload: req.payload,
        depth: parseInt(String(req.query.depth), 10),
    };
    try {
        const doc = await (0, findVersionByID_1.default)(options);
        return res.json(doc);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = findVersionByIDHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFZlcnNpb25CeUlELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbkJ5SUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxvRkFBNEQ7QUFPN0MsS0FBSyxVQUFVLHNCQUFzQixDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3pHLE1BQU0sT0FBTyxHQUFHO1FBQ2QsR0FBRztRQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtRQUMxQixFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2pCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztLQUM3QyxDQUFDO0lBRUYsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBQSx5QkFBZSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBZkQseUNBZUMifQ==