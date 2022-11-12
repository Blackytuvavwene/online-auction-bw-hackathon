"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const me_1 = __importDefault(require("../operations/me"));
async function meHandler(req, res, next) {
    try {
        const response = await (0, me_1.default)({
            req,
            collection: req.collection,
        });
        return res.status(200).json(response);
    }
    catch (err) {
        return next(err);
    }
}
exports.default = meHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9yZXF1ZXN0SGFuZGxlcnMvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSwwREFBa0M7QUFFbkIsS0FBSyxVQUFVLFNBQVMsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUM1RixJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLFlBQUUsRUFBQztZQUN4QixHQUFHO1lBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdkM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQztBQVZELDRCQVVDIn0=