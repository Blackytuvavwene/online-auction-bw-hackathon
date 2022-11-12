"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const update_1 = __importDefault(require("../update"));
const dataloader_1 = require("../../../collections/dataloader");
async function updateLocal(payload, options) {
    var _a;
    const { slug: globalSlug, depth, locale = payload.config.localization ? (_a = payload.config.localization) === null || _a === void 0 ? void 0 : _a.defaultLocale : null, fallbackLocale = null, data, user, overrideAccess = true, showHiddenFields, draft, } = options;
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
    return (0, update_1.default)({
        slug: globalSlug,
        data,
        depth,
        globalConfig,
        overrideAccess,
        showHiddenFields,
        draft,
        req,
    });
}
exports.default = updateLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dsb2JhbHMvb3BlcmF0aW9ucy9sb2NhbC91cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSx1REFBK0I7QUFDL0IsZ0VBQWdFO0FBY2pELEtBQUssVUFBVSxXQUFXLENBQTZCLE9BQWdCLEVBQUUsT0FBZ0I7O0lBQ3RHLE1BQU0sRUFDSixJQUFJLEVBQUUsVUFBVSxFQUNoQixLQUFLLEVBQ0wsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSwwQ0FBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDeEYsY0FBYyxHQUFHLElBQUksRUFDckIsSUFBSSxFQUNKLElBQUksRUFDSixjQUFjLEdBQUcsSUFBSSxFQUNyQixnQkFBZ0IsRUFDaEIsS0FBSyxHQUNOLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDO0lBRXpGLE1BQU0sR0FBRyxHQUFHO1FBQ1YsSUFBSTtRQUNKLFVBQVUsRUFBRSxPQUFPO1FBQ25CLE1BQU07UUFDTixjQUFjO1FBQ2QsT0FBTztLQUNVLENBQUM7SUFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBQSwwQkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sSUFBQSxnQkFBTSxFQUFDO1FBQ1osSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSTtRQUNKLEtBQUs7UUFDTCxZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQixLQUFLO1FBQ0wsR0FBRztLQUNKLENBQUMsQ0FBQztBQUNMLENBQUM7QUFuQ0QsOEJBbUNDIn0=