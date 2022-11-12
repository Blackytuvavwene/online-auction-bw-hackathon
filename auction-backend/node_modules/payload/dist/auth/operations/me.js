"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getExtractJWT_1 = __importDefault(require("../getExtractJWT"));
async function me({ req, collection, }) {
    const extractJWT = (0, getExtractJWT_1.default)(req.payload.config);
    let response = {
        user: null,
    };
    if (req.user) {
        const user = { ...req.user };
        if (user.collection !== collection.config.slug) {
            return {
                user: null,
            };
        }
        delete user.collection;
        response = {
            user,
            collection: req.user.collection,
        };
        const token = extractJWT(req);
        if (token) {
            response.token = token;
            const decoded = jsonwebtoken_1.default.decode(token);
            if (decoded)
                response.exp = decoded.exp;
        }
    }
    // /////////////////////////////////////
    // After Me - Collection
    // /////////////////////////////////////
    await collection.config.hooks.afterMe.reduce(async (priorHook, hook) => {
        await priorHook;
        response = await hook({
            req,
            response,
        }) || response;
    }, Promise.resolve());
    return response;
}
exports.default = me;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0VBQStCO0FBRS9CLHFFQUE2QztBQWdCN0MsS0FBSyxVQUFVLEVBQUUsQ0FBQyxFQUNoQixHQUFHLEVBQ0gsVUFBVSxHQUNBO0lBQ1YsTUFBTSxVQUFVLEdBQUcsSUFBQSx1QkFBYSxFQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsSUFBSSxRQUFRLEdBQVc7UUFDckIsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0lBRUYsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ1osTUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDOUMsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSTthQUNYLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV2QixRQUFRLEdBQUc7WUFDVCxJQUFJO1lBQ0osVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNoQyxDQUFDO1FBRUYsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdkIsTUFBTSxPQUFPLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFtQixDQUFDO1lBQ3BELElBQUksT0FBTztnQkFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDekM7S0FDRjtJQUVELHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsd0NBQXdDO0lBRXhDLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ3JFLE1BQU0sU0FBUyxDQUFDO1FBRWhCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQztZQUNwQixHQUFHO1lBQ0gsUUFBUTtTQUNULENBQUMsSUFBSSxRQUFRLENBQUM7SUFDakIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFRCxrQkFBZSxFQUFFLENBQUMifQ==