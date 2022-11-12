"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const errors_1 = require("../../errors");
async function verifyEmail(args) {
    if (!Object.prototype.hasOwnProperty.call(args, 'token')) {
        throw new errors_1.APIError('Missing required data.', http_status_1.default.BAD_REQUEST);
    }
    const user = await args.collection.Model.findOne({
        _verificationToken: args.token,
    });
    if (!user)
        throw new errors_1.APIError('Verification token is invalid.', http_status_1.default.BAD_REQUEST);
    if (user && user._verified === true)
        throw new errors_1.APIError('This account has already been activated.', http_status_1.default.ACCEPTED);
    user._verified = true;
    user._verificationToken = undefined;
    await user.save();
    return true;
}
exports.default = verifyEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5RW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL3ZlcmlmeUVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXFDO0FBQ3JDLHlDQUF3QztBQVF4QyxLQUFLLFVBQVUsV0FBVyxDQUFDLElBQVU7SUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFDeEQsTUFBTSxJQUFJLGlCQUFRLENBQUMsd0JBQXdCLEVBQUUscUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN0RTtJQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQy9DLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLO0tBQy9CLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxJQUFJO1FBQUUsTUFBTSxJQUFJLGlCQUFRLENBQUMsZ0NBQWdDLEVBQUUscUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7UUFBRSxNQUFNLElBQUksaUJBQVEsQ0FBQywwQ0FBMEMsRUFBRSxxQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7SUFFcEMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEIsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=