"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const unlock_1 = __importDefault(require("../unlock"));
const dataloader_1 = require("../../../collections/dataloader");
async function localUnlock(payload, options) {
    const { collection: collectionSlug, data, overrideAccess = true, req = {}, } = options;
    const collection = payload.collections[collectionSlug];
    req.payload = payload;
    req.payloadAPI = 'local';
    if (!req.payloadDataLoader)
        req.payloadDataLoader = (0, dataloader_1.getDataLoader)(req);
    return (0, unlock_1.default)({
        data,
        collection,
        overrideAccess,
        req,
    });
}
exports.default = localUnlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2F1dGgvb3BlcmF0aW9ucy9sb2NhbC91bmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx1REFBK0I7QUFDL0IsZ0VBQWdFO0FBV2hFLEtBQUssVUFBVSxXQUFXLENBQUMsT0FBZ0IsRUFBRSxPQUFnQjtJQUMzRCxNQUFNLEVBQ0osVUFBVSxFQUFFLGNBQWMsRUFDMUIsSUFBSSxFQUNKLGNBQWMsR0FBRyxJQUFJLEVBQ3JCLEdBQUcsR0FBRyxFQUFvQixHQUMzQixHQUFHLE9BQU8sQ0FBQztJQUVaLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFdkQsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDdEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFFekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUI7UUFBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBQSwwQkFBYSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXZFLE9BQU8sSUFBQSxnQkFBTSxFQUFDO1FBQ1osSUFBSTtRQUNKLFVBQVU7UUFDVixjQUFjO1FBQ2QsR0FBRztLQUNKLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==