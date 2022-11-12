"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
const executeAccess_1 = __importDefault(require("../executeAccess"));
async function unlock(args) {
    if (!Object.prototype.hasOwnProperty.call(args.data, 'email')) {
        throw new errors_1.APIError('Missing email.');
    }
    const { collection: { Model, config: collectionConfig, }, req, overrideAccess, } = args;
    // /////////////////////////////////////
    // Access
    // /////////////////////////////////////
    if (!overrideAccess) {
        await (0, executeAccess_1.default)({ req }, collectionConfig.access.unlock);
    }
    const options = { ...args };
    const { data } = options;
    // /////////////////////////////////////
    // Unlock
    // /////////////////////////////////////
    const user = await Model.findOne({ email: data.email.toLowerCase() });
    if (!user)
        return null;
    await user.resetLoginAttempts();
    return true;
}
exports.default = unlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvb3BlcmF0aW9ucy91bmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBd0M7QUFDeEMscUVBQTZDO0FBYTdDLEtBQUssVUFBVSxNQUFNLENBQUMsSUFBVTtJQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFDN0QsTUFBTSxJQUFJLGlCQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUN0QztJQUVELE1BQU0sRUFDSixVQUFVLEVBQUUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUFFLGdCQUFnQixHQUN6QixFQUNELEdBQUcsRUFDSCxjQUFjLEdBQ2YsR0FBRyxJQUFJLENBQUM7SUFFVCx3Q0FBd0M7SUFDeEMsU0FBUztJQUNULHdDQUF3QztJQUV4QyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ25CLE1BQU0sSUFBQSx1QkFBYSxFQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzlEO0lBRUQsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO0lBRTVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFekIsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCx3Q0FBd0M7SUFFeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXRFLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdkIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUVoQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==