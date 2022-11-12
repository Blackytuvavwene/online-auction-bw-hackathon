"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataloader_1 = require("../../../collections/dataloader");
const restoreVersion_1 = __importDefault(require("../restoreVersion"));
async function restoreVersionLocal(payload, options) {
    var _a;
    const { slug: globalSlug, depth, id, user, locale = payload.config.localization ? (_a = payload.config.localization) === null || _a === void 0 ? void 0 : _a.defaultLocale : null, fallbackLocale = null, overrideAccess = true, showHiddenFields, } = options;
    const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
    const req = {
        user,
        payloadAPI: 'local',
        payload,
        locale,
        fallbackLocale,
    };
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, restoreVersion_1.default)({
        depth,
        globalConfig,
        overrideAccess,
        id,
        showHiddenFields,
        req,
    });
}
exports.default = restoreVersionLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG9yZVZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ2xvYmFscy9vcGVyYXRpb25zL2xvY2FsL3Jlc3RvcmVWZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0VBQWdFO0FBSWhFLHVFQUErQztBQWFoQyxLQUFLLFVBQVUsbUJBQW1CLENBQXFDLE9BQWdCLEVBQUUsT0FBZ0I7O0lBQ3RILE1BQU0sRUFDSixJQUFJLEVBQUUsVUFBVSxFQUNoQixLQUFLLEVBQ0wsRUFBRSxFQUNGLElBQUksRUFDSixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RixjQUFjLEdBQUcsSUFBSSxFQUNyQixjQUFjLEdBQUcsSUFBSSxFQUNyQixnQkFBZ0IsR0FDakIsR0FBRyxPQUFPLENBQUM7SUFFWixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUM7SUFFekYsTUFBTSxHQUFHLEdBQUc7UUFDVixJQUFJO1FBQ0osVUFBVSxFQUFFLE9BQU87UUFDbkIsT0FBTztRQUNQLE1BQU07UUFDTixjQUFjO0tBQ0csQ0FBQztJQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLDBCQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkUsT0FBTyxJQUFBLHdCQUFjLEVBQUM7UUFDcEIsS0FBSztRQUNMLFlBQVk7UUFDWixjQUFjO1FBQ2QsRUFBRTtRQUNGLGdCQUFnQjtRQUNoQixHQUFHO0tBQ0osQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWhDRCxzQ0FnQ0MifQ==