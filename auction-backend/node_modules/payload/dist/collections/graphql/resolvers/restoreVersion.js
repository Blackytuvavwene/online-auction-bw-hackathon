"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restoreVersion_1 = __importDefault(require("../../operations/restoreVersion"));
function restoreVersionResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            id: args.id,
            req: context.req,
            depth: 0,
        };
        const result = await (0, restoreVersion_1.default)(options);
        return result;
    }
    return resolver;
}
exports.default = restoreVersionResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvZ3JhcGhxbC9yZXNvbHZlcnMvcmVzdG9yZVZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxxRkFBNkQ7QUFhN0QsU0FBd0Isc0JBQXNCLENBQUMsVUFBc0I7SUFDbkUsS0FBSyxVQUFVLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDdEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxVQUFVO1lBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2hCLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSx3QkFBYyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBZEQseUNBY0MifQ==