"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyEmail_1 = __importDefault(require("../verifyEmail"));
async function localVerifyEmail(payload, options) {
    const { collection: collectionSlug, token, } = options;
    const collection = payload.collections[collectionSlug];
    return (0, verifyEmail_1.default)({
        token,
        collection,
    });
}
exports.default = localVerifyEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL2xvY2FsL3ZlcmlmeUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsaUVBQXlDO0FBT3pDLEtBQUssVUFBVSxnQkFBZ0IsQ0FBQyxPQUFnQixFQUFFLE9BQWdCO0lBQ2hFLE1BQU0sRUFDSixVQUFVLEVBQUUsY0FBYyxFQUMxQixLQUFLLEdBQ04sR0FBRyxPQUFPLENBQUM7SUFFWixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXZELE9BQU8sSUFBQSxxQkFBVyxFQUFDO1FBQ2pCLEtBQUs7UUFDTCxVQUFVO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGtCQUFlLGdCQUFnQixDQUFDIn0=