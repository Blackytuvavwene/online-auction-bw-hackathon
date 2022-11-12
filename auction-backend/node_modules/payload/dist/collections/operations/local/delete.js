"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_1 = __importDefault(require("../delete"));
const dataloader_1 = require("../../dataloader");
async function deleteLocal(payload, options) {
    var _a;
    const { collection: collectionSlug, depth, id, locale = payload.config.localization ? (_a = payload.config.localization) === null || _a === void 0 ? void 0 : _a.defaultLocale : null, fallbackLocale = null, user, overrideAccess = true, showHiddenFields, } = options;
    const collection = payload.collections[collectionSlug];
    const req = {
        user,
        payloadAPI: 'local',
        locale,
        fallbackLocale,
        payload,
    };
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, delete_1.default)({
        depth,
        id,
        collection,
        overrideAccess,
        showHiddenFields,
        req,
    });
}
exports.default = deleteLocal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvbG9jYWwvZGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsdURBQXdDO0FBQ3hDLGlEQUFpRDtBQWFsQyxLQUFLLFVBQVUsV0FBVyxDQUE2QixPQUFnQixFQUFFLE9BQWdCOztJQUN0RyxNQUFNLEVBQ0osVUFBVSxFQUFFLGNBQWMsRUFDMUIsS0FBSyxFQUNMLEVBQUUsRUFDRixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLDBDQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RixjQUFjLEdBQUcsSUFBSSxFQUNyQixJQUFJLEVBQ0osY0FBYyxHQUFHLElBQUksRUFDckIsZ0JBQWdCLEdBQ2pCLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxNQUFNLEdBQUcsR0FBRztRQUNWLElBQUk7UUFDSixVQUFVLEVBQUUsT0FBTztRQUNuQixNQUFNO1FBQ04sY0FBYztRQUNkLE9BQU87S0FDVSxDQUFDO0lBRXBCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCO1FBQUUsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUEsMEJBQWEsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUV2RSxPQUFPLElBQUEsZ0JBQWUsRUFBQztRQUNyQixLQUFLO1FBQ0wsRUFBRTtRQUNGLFVBQVU7UUFDVixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLEdBQUc7S0FDSixDQUFDLENBQUM7QUFDTCxDQUFDO0FBaENELDhCQWdDQyJ9