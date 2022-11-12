"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registerFirstUser_1 = __importDefault(require("../operations/registerFirstUser"));
async function registerFirstUserHandler(req, res, next) {
    try {
        const firstUser = await (0, registerFirstUser_1.default)({
            req,
            res,
            collection: req.collection,
            data: req.body,
        });
        return res.status(201).json(firstUser);
    }
    catch (error) {
        return next(error);
    }
}
exports.default = registerFirstUserHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJGaXJzdFVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVnaXN0ZXJGaXJzdFVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx3RkFBZ0U7QUFFakQsS0FBSyxVQUFVLHdCQUF3QixDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzNHLElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUEsMkJBQWlCLEVBQUM7WUFDeEMsR0FBRztZQUNILEdBQUc7WUFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBYkQsMkNBYUMifQ==