"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = __importDefault(require("../../operations/init"));
function initResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            Model: collection.Model,
            req: context.req,
        };
        const result = await (0, init_1.default)(options);
        return result;
    }
    return resolver;
}
exports.default = initResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBeUM7QUFHekMsU0FBUyxZQUFZLENBQUMsVUFBc0I7SUFDMUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDdEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7WUFDdkIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1NBQ2pCLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsY0FBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsWUFBWSxDQUFDIn0=