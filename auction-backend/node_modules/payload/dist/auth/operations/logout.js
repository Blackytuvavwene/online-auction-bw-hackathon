"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const errors_1 = require("../../errors");
async function logout(incomingArgs) {
    let args = incomingArgs;
    const { res, req: { payload: { config, }, user, }, req, collection: { config: collectionConfig, }, collection, } = incomingArgs;
    if (!user)
        throw new errors_1.APIError('No User', http_status_1.default.BAD_REQUEST);
    if (user.collection !== collectionConfig.slug)
        throw new errors_1.APIError('Incorrect collection', http_status_1.default.FORBIDDEN);
    const cookieOptions = {
        path: '/',
        httpOnly: true,
        secure: collectionConfig.auth.cookies.secure,
        sameSite: collectionConfig.auth.cookies.sameSite,
        domain: undefined,
    };
    if (collectionConfig.auth.cookies.domain)
        cookieOptions.domain = collectionConfig.auth.cookies.domain;
    await collection.config.hooks.afterLogout.reduce(async (priorHook, hook) => {
        await priorHook;
        args = (await hook({
            req,
            res,
        })) || args;
    }, Promise.resolve());
    res.clearCookie(`${config.cookiePrefix}-token`, cookieOptions);
    return 'Logged out successfully.';
}
exports.default = logout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvb3BlcmF0aW9ucy9sb2dvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBcUM7QUFHckMseUNBQXdDO0FBU3hDLEtBQUssVUFBVSxNQUFNLENBQUMsWUFBdUI7SUFDM0MsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQ3hCLE1BQU0sRUFDSixHQUFHLEVBQ0gsR0FBRyxFQUFFLEVBQ0gsT0FBTyxFQUFFLEVBQ1AsTUFBTSxHQUNQLEVBQ0QsSUFBSSxHQUNMLEVBQ0QsR0FBRyxFQUNILFVBQVUsRUFBRSxFQUNWLE1BQU0sRUFBRSxnQkFBZ0IsR0FDekIsRUFDRCxVQUFVLEdBQ1gsR0FBRyxZQUFZLENBQUM7SUFFakIsSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksaUJBQVEsQ0FBQyxTQUFTLEVBQUUscUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssZ0JBQWdCLENBQUMsSUFBSTtRQUFFLE1BQU0sSUFBSSxpQkFBUSxDQUFDLHNCQUFzQixFQUFFLHFCQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFaEgsTUFBTSxhQUFhLEdBQUc7UUFDcEIsSUFBSSxFQUFFLEdBQUc7UUFDVCxRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFDNUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUNoRCxNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDO0lBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07UUFBRSxhQUFhLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBRXRHLE1BQU0sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ3pFLE1BQU0sU0FBUyxDQUFDO1FBRWhCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2pCLEdBQUc7WUFDSCxHQUFHO1NBQ0osQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFL0QsT0FBTywwQkFBMEIsQ0FBQztBQUNwQyxDQUFDO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=