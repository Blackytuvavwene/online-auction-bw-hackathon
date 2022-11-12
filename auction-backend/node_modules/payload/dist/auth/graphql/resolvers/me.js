"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const me_1 = __importDefault(require("../../operations/me"));
function meResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            req: context.req,
        };
        return (0, me_1.default)(options);
    }
    return resolver;
}
exports.default = meResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUFxQztBQUdyQyxTQUFTLFVBQVUsQ0FBQyxVQUFzQjtJQUN4QyxLQUFLLFVBQVUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTztRQUN0QyxNQUFNLE9BQU8sR0FBRztZQUNkLFVBQVU7WUFDVixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztRQUNGLE9BQU8sSUFBQSxZQUFFLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==