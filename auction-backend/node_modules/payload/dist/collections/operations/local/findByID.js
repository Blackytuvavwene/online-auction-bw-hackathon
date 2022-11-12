"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findByID_1 = __importDefault(require("../findByID"));
const dataloader_1 = require("../../dataloader");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findByIDLocal(payload, options) {
    var _a, _b, _c;
    const { collection: collectionSlug, depth, currentDepth, id, locale, fallbackLocale, user, overrideAccess = true, disableErrors = false, showHiddenFields, req = {}, draft = false, } = options;
    const collection = payload.collections[collectionSlug];
    req.payloadAPI = 'local';
    req.locale = locale || (req === null || req === void 0 ? void 0 : req.locale) || (((_a = payload === null || payload === void 0 ? void 0 : payload.config) === null || _a === void 0 ? void 0 : _a.localization) ? (_c = (_b = payload === null || payload === void 0 ? void 0 : payload.config) === null || _b === void 0 ? void 0 : _b.localization) === null || _c === void 0 ? void 0 : _c.defaultLocale : null);
    req.fallbackLocale = fallbackLocale || (req === null || req === void 0 ? void 0 : req.fallbackLocale) || null;
    req.payload = payload;
    if (typeof user !== 'undefined')
        req.user = user;
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, findByID_1.default)({
        depth,
        currentDepth,
        id,
        collection,
        overrideAccess,
        disableErrors,
        showHiddenFields,
        req,
        draft,
    });
}
exports.default = findByIDLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEJ5SUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvb3BlcmF0aW9ucy9sb2NhbC9maW5kQnlJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLDJEQUFtQztBQUVuQyxpREFBaUQ7QUFpQmpELDhEQUE4RDtBQUMvQyxLQUFLLFVBQVUsYUFBYSxDQUE2QixPQUFnQixFQUFFLE9BQWdCOztJQUN4RyxNQUFNLEVBQ0osVUFBVSxFQUFFLGNBQWMsRUFDMUIsS0FBSyxFQUNMLFlBQVksRUFDWixFQUFFLEVBQ0YsTUFBTSxFQUNOLGNBQWMsRUFDZCxJQUFJLEVBQ0osY0FBYyxHQUFHLElBQUksRUFDckIsYUFBYSxHQUFHLEtBQUssRUFDckIsZ0JBQWdCLEVBQ2hCLEdBQUcsR0FBRyxFQUFvQixFQUMxQixLQUFLLEdBQUcsS0FBSyxHQUNkLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSxDQUFBLElBQUksQ0FBQyxDQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxNQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsWUFBWSwwQ0FBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsY0FBYyxLQUFJLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxjQUFjLENBQUEsSUFBSSxJQUFJLENBQUM7SUFDbkUsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFdEIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXO1FBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBQSwwQkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sSUFBQSxrQkFBUSxFQUFDO1FBQ2QsS0FBSztRQUNMLFlBQVk7UUFDWixFQUFFO1FBQ0YsVUFBVTtRQUNWLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLEdBQUc7UUFDSCxLQUFLO0tBQ04sQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXRDRCxnQ0FzQ0MifQ==