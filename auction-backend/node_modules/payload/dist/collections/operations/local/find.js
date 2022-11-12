"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_1 = __importDefault(require("../find"));
const dataloader_1 = require("../../dataloader");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function findLocal(payload, options) {
    var _a, _b, _c, _d;
    const { collection: collectionSlug, depth, currentDepth, page, limit, where, locale = payload.config.localization ? (_a = payload.config.localization) === null || _a === void 0 ? void 0 : _a.defaultLocale : null, fallbackLocale = null, user, overrideAccess = true, disableErrors, showHiddenFields, sort, draft = false, pagination = true, req = {}, } = options;
    const collection = payload.collections[collectionSlug];
    req.payloadAPI = 'local';
    req.locale = locale || (req === null || req === void 0 ? void 0 : req.locale) || (((_b = payload === null || payload === void 0 ? void 0 : payload.config) === null || _b === void 0 ? void 0 : _b.localization) ? (_d = (_c = payload === null || payload === void 0 ? void 0 : payload.config) === null || _c === void 0 ? void 0 : _c.localization) === null || _d === void 0 ? void 0 : _d.defaultLocale : null);
    req.fallbackLocale = fallbackLocale || (req === null || req === void 0 ? void 0 : req.fallbackLocale) || null;
    req.payload = payload;
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    if (typeof user !== 'undefined')
        req.user = user;
    return (0, find_1.default)({
        depth,
        currentDepth,
        sort,
        page,
        limit,
        where,
        collection,
        overrideAccess,
        disableErrors,
        showHiddenFields,
        draft,
        pagination,
        req,
    });
}
exports.default = findLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2ZpbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxtREFBMkI7QUFDM0IsaURBQWlEO0FBcUJqRCw4REFBOEQ7QUFDL0MsS0FBSyxVQUFVLFNBQVMsQ0FBNkIsT0FBZ0IsRUFBRSxPQUFnQjs7SUFDcEcsTUFBTSxFQUNKLFVBQVUsRUFBRSxjQUFjLEVBQzFCLEtBQUssRUFDTCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxLQUFLLEVBQ0wsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSwwQ0FBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDeEYsY0FBYyxHQUFHLElBQUksRUFDckIsSUFBSSxFQUNKLGNBQWMsR0FBRyxJQUFJLEVBQ3JCLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsSUFBSSxFQUNKLEtBQUssR0FBRyxLQUFLLEVBQ2IsVUFBVSxHQUFHLElBQUksRUFDakIsR0FBRyxHQUFHLEVBQW9CLEdBQzNCLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsTUFBTSxDQUFBLElBQUksQ0FBQyxDQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxNQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sMENBQUUsWUFBWSwwQ0FBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsY0FBYyxLQUFJLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxjQUFjLENBQUEsSUFBSSxJQUFJLENBQUM7SUFDbkUsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFFdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBQSwwQkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXZFLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVztRQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBRWpELE9BQU8sSUFBQSxjQUFJLEVBQUM7UUFDVixLQUFLO1FBQ0wsWUFBWTtRQUNaLElBQUk7UUFDSixJQUFJO1FBQ0osS0FBSztRQUNMLEtBQUs7UUFDTCxVQUFVO1FBQ1YsY0FBYztRQUNkLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsS0FBSztRQUNMLFVBQVU7UUFDVixHQUFHO0tBQ0osQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTlDRCw0QkE4Q0MifQ==