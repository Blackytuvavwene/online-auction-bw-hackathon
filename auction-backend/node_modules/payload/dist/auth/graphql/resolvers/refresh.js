"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const refresh_1 = __importDefault(require("../../operations/refresh"));
const getExtractJWT_1 = __importDefault(require("../../getExtractJWT"));
function refreshResolver(collection) {
    async function resolver(_, args, context) {
        let token;
        const extractJWT = (0, getExtractJWT_1.default)(context.req.payload.config);
        token = extractJWT(context.req);
        if (args.token) {
            token = args.token;
        }
        const options = {
            collection,
            token,
            req: context.req,
            res: context.res,
        };
        const result = await (0, refresh_1.default)(options);
        return result;
    }
    return resolver;
}
exports.default = refreshResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3JlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1RUFBK0M7QUFDL0Msd0VBQWdEO0FBRWhELFNBQVMsZUFBZSxDQUFDLFVBQXNCO0lBQzdDLEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3RDLElBQUksS0FBSyxDQUFDO1FBRVYsTUFBTSxVQUFVLEdBQUcsSUFBQSx1QkFBYSxFQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdELEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3BCO1FBRUQsTUFBTSxPQUFPLEdBQUc7WUFDZCxVQUFVO1lBQ1YsS0FBSztZQUNMLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztZQUNoQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxpQkFBTyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsZUFBZSxDQUFDIn0=