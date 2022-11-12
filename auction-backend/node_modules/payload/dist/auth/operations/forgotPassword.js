"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const errors_1 = require("../../errors");
async function forgotPassword(incomingArgs) {
    if (!Object.prototype.hasOwnProperty.call(incomingArgs.data, 'email')) {
        throw new errors_1.APIError('Missing email.', 400);
    }
    let args = incomingArgs;
    // /////////////////////////////////////
    // beforeOperation - Collection
    // /////////////////////////////////////
    await args.collection.config.hooks.beforeOperation.reduce(async (priorHook, hook) => {
        await priorHook;
        args = (await hook({
            args,
            operation: 'forgotPassword',
        })) || args;
    }, Promise.resolve());
    const { collection: { Model, config: collectionConfig, }, data, disableEmail, expiration, req: { payload: { config, sendEmail: email, emailOptions, }, }, req, } = args;
    // /////////////////////////////////////
    // Forget password
    // /////////////////////////////////////
    let token = crypto_1.default.randomBytes(20);
    token = token.toString('hex');
    const user = await Model.findOne({ email: data.email.toLowerCase() });
    if (!user)
        return null;
    user.resetPasswordToken = token;
    user.resetPasswordExpiration = expiration || Date.now() + 3600000; // 1 hour
    await user.save();
    const userJSON = user.toJSON({ virtuals: true });
    if (!disableEmail) {
        let html = `You are receiving this because you (or someone else) have requested the reset of the password for your account.
    Please click on the following link, or paste this into your browser to complete the process:
    <a href="${config.serverURL}${config.routes.admin}/reset/${token}">
     ${config.serverURL}${config.routes.admin}/reset/${token}
    </a>
    If you did not request this, please ignore this email and your password will remain unchanged.`;
        if (typeof collectionConfig.auth.forgotPassword.generateEmailHTML === 'function') {
            html = await collectionConfig.auth.forgotPassword.generateEmailHTML({
                req,
                token,
                user: userJSON,
            });
        }
        let subject = 'Reset your password';
        if (typeof collectionConfig.auth.forgotPassword.generateEmailSubject === 'function') {
            subject = await collectionConfig.auth.forgotPassword.generateEmailSubject({
                req,
                token,
                user: userJSON,
            });
        }
        email({
            from: `"${emailOptions.fromName}" <${emailOptions.fromAddress}>`,
            to: data.email,
            subject,
            html,
        });
    }
    // /////////////////////////////////////
    // afterForgotPassword - Collection
    // /////////////////////////////////////
    await collectionConfig.hooks.afterForgotPassword.reduce(async (priorHook, hook) => {
        await priorHook;
        await hook({ args });
    }, Promise.resolve());
    return token;
}
exports.default = forgotPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290UGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL2ZvcmdvdFBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLHlDQUF3QztBQWlCeEMsS0FBSyxVQUFVLGNBQWMsQ0FBQyxZQUF1QjtJQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUU7UUFDckUsTUFBTSxJQUFJLGlCQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLElBQUksR0FBRyxZQUFZLENBQUM7SUFFeEIsd0NBQXdDO0lBQ3hDLCtCQUErQjtJQUMvQix3Q0FBd0M7SUFFeEMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ2xGLE1BQU0sU0FBUyxDQUFDO1FBRWhCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ2pCLElBQUk7WUFDSixTQUFTLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNkLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUV0QixNQUFNLEVBQ0osVUFBVSxFQUFFLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFBRSxnQkFBZ0IsR0FDekIsRUFDRCxJQUFJLEVBQ0osWUFBWSxFQUNaLFVBQVUsRUFDVixHQUFHLEVBQUUsRUFDSCxPQUFPLEVBQUUsRUFDUCxNQUFNLEVBQ04sU0FBUyxFQUFFLEtBQUssRUFDaEIsWUFBWSxHQUNiLEdBQ0YsRUFDRCxHQUFHLEdBQ0osR0FBRyxJQUFJLENBQUM7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