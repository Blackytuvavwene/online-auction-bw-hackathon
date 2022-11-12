"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgotPassword_1 = __importDefault(require("../forgotPassword"));
const dataloader_1 = require("../../../collections/dataloader");
async function localForgotPassword(payload, options) {
    const { collection: collectionSlug, data, expiration, disableEmail, req = {}, } = options;
    const collection = payload.collections[collectionSlug];
    req.payloadAPI = 'local';
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, forgotPassword_1.default)({
        data,
        collection,
        disableEmail,
        expiration,
        req,
    });
}
exports.default = localForgotPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL2xvY2FsL2ZvcmdvdFBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsdUVBQTJEO0FBRTNELGdFQUFnRTtBQVloRSxLQUFLLFVBQVUsbUJBQW1CLENBQUMsT0FBZ0IsRUFBRSxPQUFnQjtJQUNuRSxNQUFNLEVBQ0osVUFBVSxFQUFFLGNBQWMsRUFDMUIsSUFBSSxFQUNKLFVBQVUsRUFDVixZQUFZLEVBQ1osR0FBRyxHQUFHLEVBQW9CLEdBQzNCLEdBQUcsT0FBTyxDQUFDO0lBRVosTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV2RCxHQUFHLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUV6QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQjtRQUFFLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLDBCQUFhLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdkUsT0FBTyxJQUFBLHdCQUFjLEVBQUM7UUFDcEIsSUFBSTtRQUNKLFVBQVU7UUFDVixZQUFZO1FBQ1osVUFBVTtRQUNWLEdBQUc7S0FDSixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsa0JBQWUsbUJBQW1CLENBQUMifQ==