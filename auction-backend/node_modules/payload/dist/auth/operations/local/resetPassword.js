"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resetPassword_1 = __importDefault(require("../resetPassword"));
const dataloader_1 = require("../../../collections/dataloader");
async function localResetPassword(payload, options) {
    const { collection: collectionSlug, data, overrideAccess, req = {}, } = options;
    const collection = payload.collections[collectionSlug];
    req.payload = payload;
    req.payloadAPI = 'local';
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, resetPassword_1.default)({
        collection,
        data,
        overrideAccess,
        req,
    });
}
exports.default = localResetPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9jYWwvcmVzZXRQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHFFQUF5RDtBQUV6RCxnRUFBZ0U7QUFZaEUsS0FBSyxVQUFVLGtCQUFrQixDQUFDLE9BQWdCLEVBQUUsT0FBZ0I7SUFDbEUsTUFBTSxFQUNKLFVBQVUsRUFBRSxjQUFjLEVBQzFCLElBQUksRUFDSixjQUFjLEVBQ2QsR0FBRyxHQUFHLEVBQW9CLEdBQzNCLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN0QixHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUV6QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLDBCQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkUsT0FBTyxJQUFBLHVCQUFhLEVBQUM7UUFDbkIsVUFBVTtRQUNWLElBQUk7UUFDSixjQUFjO1FBQ2QsR0FBRztLQUNKLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQyJ9