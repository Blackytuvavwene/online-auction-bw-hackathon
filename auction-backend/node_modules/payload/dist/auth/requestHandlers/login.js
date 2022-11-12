"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const login_1 = __importDefault(require("../operations/login"));
async function loginHandler(req, res, next) {
    try {
        const result = await (0, login_1.default)({
            req,
            res,
            collection: req.collection,
            data: req.body,
            depth: parseInt(String(req.query.depth), 10),
        });
        return res.status(http_status_1.default.OK)
            .json({
            message: 'Auth Passed',
            user: result.user,
            token: result.token,
            exp: result.exp,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = loginHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9yZXF1ZXN0SGFuZGxlcnMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw4REFBcUM7QUFFckMsZ0VBQW9EO0FBRXJDLEtBQUssVUFBVSxZQUFZLENBQUMsR0FBbUIsRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDL0YsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxlQUFLLEVBQUM7WUFDekIsR0FBRztZQUNILEdBQUc7WUFDSCxVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDO2FBQzdCLElBQUksQ0FBQztZQUNKLE9BQU8sRUFBRSxhQUFhO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1NBQ2hCLENBQUMsQ0FBQztLQUNOO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUM7QUFwQkQsK0JBb0JDIn0=