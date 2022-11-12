"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../login"));
const dataloader_1 = require("../../../collections/dataloader");
async function localLogin(payload, options) {
    const { collection: collectionSlug, req = {}, res, depth, locale, fallbackLocale, data, overrideAccess = true, showHiddenFields, } = options;
    const collection = payload.collections[collectionSlug];
    req.payloadAPI = 'local';
    req.payload = payload;
    req.locale = undefined;
    req.fallbackLocale = undefined;
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    const args = {
        depth,
        collection,
        overrideAccess,
        showHiddenFields,
        data,
        req,
        res,
    };
    if (locale)
        args.req.locale = locale;
    if (fallbackLocale)
        args.req.fallbackLocale = fallbackLocale;
    return (0, login_1.default)(args);
}
exports.default = localLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL2xvY2FsL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EscURBQXlDO0FBSXpDLGdFQUFnRTtBQWlCaEUsS0FBSyxVQUFVLFVBQVUsQ0FBNkIsT0FBZ0IsRUFBRSxPQUFnQjtJQUN0RixNQUFNLEVBQ0osVUFBVSxFQUFFLGNBQWMsRUFDMUIsR0FBRyxHQUFHLEVBQW9CLEVBQzFCLEdBQUcsRUFDSCxLQUFLLEVBQ0wsTUFBTSxFQUNOLGNBQWMsRUFDZCxJQUFJLEVBQ0osY0FBYyxHQUFHLElBQUksRUFDckIsZ0JBQWdCLEdBQ2pCLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUN6QixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN0QixHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUN2QixHQUFHLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUUvQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLDBCQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkUsTUFBTSxJQUFJLEdBQUc7UUFDWCxLQUFLO1FBQ0wsVUFBVTtRQUNWLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKLEdBQUc7UUFDSCxHQUFHO0tBQ0osQ0FBQztJQUVGLElBQUksTUFBTTtRQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQyxJQUFJLGNBQWM7UUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFFN0QsT0FBTyxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=