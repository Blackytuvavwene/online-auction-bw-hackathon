"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgotPassword_1 = __importDefault(require("../../operations/forgotPassword"));
function forgotPasswordResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email,
            },
            req: context.req,
            disableEmail: args.disableEmail,
            expiration: args.expiration,
        };
        await (0, forgotPassword_1.default)(options);
        return true;
    }
    return resolver;
}
exports.default = forgotPasswordResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9mb3Jnb3RQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFGQUE2RDtBQUU3RCxTQUFTLHNCQUFzQixDQUFDLFVBQXNCO0lBQ3BELEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3RDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVTtZQUNWLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7WUFDRCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO1FBRUYsTUFBTSxJQUFBLHdCQUFjLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELGtCQUFlLHNCQUFzQixDQUFDIn0=