"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyEmail_1 = __importDefault(require("../../operations/verifyEmail"));
function verifyEmailResolver(collection) {
    async function resolver(_, args, context) {
        if (args.locale)
            context.req.locale = args.locale;
        if (args.fallbackLocale)
            context.req.fallbackLocale = args.fallbackLocale;
        const options = {
            collection,
            token: args.token,
            req: context.req,
            res: context.res,
            api: 'GraphQL',
        };
        const success = await (0, verifyEmail_1.default)(options);
        return success;
    }
    return resolver;
}
exports.default = verifyEmailResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9ncmFwaHFsL3Jlc29sdmVycy92ZXJpZnlFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLCtFQUF1RDtBQUV2RCxTQUFTLG1CQUFtQixDQUFDLFVBQXNCO0lBQ2pELEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRTFFLE1BQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVTtZQUNWLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDaEIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1NBQ2YsQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBQSxxQkFBVyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsbUJBQW1CLENBQUMifQ==