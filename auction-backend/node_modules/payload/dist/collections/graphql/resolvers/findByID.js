"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findByID_1 = __importDefault(require("../../operations/findByID"));
function findByIDResolver(collection) {
    return async function resolver(_, args, context) {
        const { req } = context;
        if (args.locale)
            req.locale = args.locale;
        if (args.fallbackLocale)
            req.fallbackLocale = args.fallbackLocale;
        const options = {
            collection,
            id: args.id,
            req,
            draft: args.draft,
            depth: 0,
        };
        const result = await (0, findByID_1.default)(options);
        return result;
    };
}
exports.default = findByIDResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEJ5SUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvZ3JhcGhxbC9yZXNvbHZlcnMvZmluZEJ5SUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx5RUFBaUQ7QUFjakQsU0FBd0IsZ0JBQWdCLENBQUMsVUFBc0I7SUFDN0QsT0FBTyxLQUFLLFVBQVUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTztRQUM3QyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsRSxNQUFNLE9BQU8sR0FBRztZQUNkLFVBQVU7WUFDVixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxHQUFHO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxrQkFBUSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFsQkQsbUNBa0JDIn0=