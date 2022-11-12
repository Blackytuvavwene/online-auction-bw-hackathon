"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataloader_1 = require("../../../collections/dataloader");
const findOne_1 = __importDefault(require("../findOne"));
async function findOneLocal(payload, options) {
    var _a;
    const { slug: globalSlug, depth, locale = payload.config.localization ? (_a = payload.config.localization) === null || _a === void 0 ? void 0 : _a.defaultLocale : null, fallbackLocale = null, user, overrideAccess = true, showHiddenFields, draft = false, } = options;
    const globalConfig = payload.globals.config.find((config) => config.slug === globalSlug);
    const req = {
        user,
        payloadAPI: 'local',
        locale,
        fallbackLocale,
        payload,
    };
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, findOne_1.default)({
        slug: globalSlug,
        depth,
        globalConfig,
        overrideAccess,
        showHiddenFields,
        draft,
        req,
    });
}
exports.default = findOneLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvZmluZE9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdFQUFnRTtBQUloRSx5REFBaUM7QUFhbEIsS0FBSyxVQUFVLFlBQVksQ0FBNkIsT0FBZ0IsRUFBRSxPQUFnQjs7SUFDdkcsTUFBTSxFQUNKLElBQUksRUFBRSxVQUFVLEVBQ2hCLEtBQUssRUFDTCxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RixjQUFjLEdBQUcsSUFBSSxFQUNyQixJQUFJLEVBQ0osY0FBYyxHQUFHLElBQUksRUFDckIsZ0JBQWdCLEVBQ2hCLEtBQUssR0FBRyxLQUFLLEdBQ2QsR0FBRyxPQUFPLENBQUM7SUFFWixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUM7SUFFekYsTUFBTSxHQUFHLEdBQUc7UUFDVixJQUFJO1FBQ0osVUFBVSxFQUFFLE9BQU87UUFDbkIsTUFBTTtRQUNOLGNBQWM7UUFDZCxPQUFPO0tBQ1UsQ0FBQztJQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLDBCQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkUsT0FBTyxJQUFBLGlCQUFPLEVBQUM7UUFDYixJQUFJLEVBQUUsVUFBVTtRQUNoQixLQUFLO1FBQ0wsWUFBWTtRQUNaLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLEdBQUc7S0FDSixDQUFDLENBQUM7QUFDTCxDQUFDO0FBakNELCtCQWlDQyJ9