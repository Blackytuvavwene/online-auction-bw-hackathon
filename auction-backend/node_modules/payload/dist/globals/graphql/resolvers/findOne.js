"use strict";
/* eslint-disable no-param-reassign */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findOne_1 = __importDefault(require("../../operations/findOne"));
function findOneResolver(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale)
            context.req.locale = args.locale;
        if (args.fallbackLocale)
            context.req.fallbackLocale = args.fallbackLocale;
        const { slug } = globalConfig;
        const options = {
            globalConfig,
            slug,
            depth: 0,
            req: context.req,
            draft: args.draft,
        };
        const result = await (0, findOne_1.default)(options);
        return result;
    };
}
exports.default = findOneResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRPbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFzQzs7Ozs7QUFJdEMsdUVBQStDO0FBRS9DLFNBQXdCLGVBQWUsQ0FBQyxZQUFtQztJQUN6RSxPQUFPLEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQzdDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUM7UUFFOUIsTUFBTSxPQUFPLEdBQUc7WUFDZCxZQUFZO1lBQ1osSUFBSTtZQUNKLEtBQUssRUFBRSxDQUFDO1lBQ1IsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLGlCQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWxCRCxrQ0FrQkMifQ==