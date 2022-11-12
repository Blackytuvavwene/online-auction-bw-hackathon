"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function sendVerificationEmail(args) {
    // Verify token from e-mail
    const { config, emailOptions, sendEmail, collection: { config: collectionConfig, }, user, disableEmail, req, token, } = args;
    if (!disableEmail) {
        const defaultVerificationURL = `${config.serverURL}${config.routes.admin}/${collectionConfig.slug}/verify/${token}`;
        let html = `A new account has just been created for you to access <a href="${config.serverURL}">${config.serverURL}</a>.
    Please click on the following link or paste the URL below into your browser to verify your email:
    <a href="${defaultVerificationURL}">${defaultVerificationURL}</a><br>
    After verifying your email, you will be able to log in successfully.`;
        const verify = collectionConfig.auth.verify;
        // Allow config to override email content
        if (typeof verify.generateEmailHTML === 'function') {
            html = await verify.generateEmailHTML({
                req,
                token,
                user,
            });
        }
        let subject = 'Verify your email';
        // Allow config to override email subject
        if (typeof verify.generateEmailSubject === 'function') {
            subject = await verify.generateEmailSubject({
                req,
                token,
                user,
            });
        }
        sendEmail({
            from: `"${emailOptions.fromName}" <${emailOptions.fromAddress}>`,
            to: user.email,
            subject,
            html,
        });
    }
}
exports.default = sendVerificationEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZFZlcmlmaWNhdGlvbkVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvc2VuZFZlcmlmaWNhdGlvbkVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBa0JBLEtBQUssVUFBVSxxQkFBcUIsQ0FBQyxJQUFVO0lBQzdDLDJCQUEyQjtJQUMzQixNQUFNLEVBQ0osTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsVUFBVSxFQUFFLEVBQ1YsTUFBTSxFQUFFLGdCQUFnQixHQUN6QixFQUNELElBQUksRUFDSixZQUFZLEVBQ1osR0FBRyxFQUNILEtBQUssR0FDTixHQUFHLElBQUksQ0FBQztJQUVULElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsSUFBSSxXQUFXLEtBQUssRUFBRSxDQUFDO1FBRXBILElBQUksSUFBSSxHQUFHLGtFQUFrRSxNQUFNLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxTQUFTOztlQUV2RyxzQkFBc0IsS0FBSyxzQkFBc0I7eUVBQ1MsQ0FBQztRQUV0RSxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBc0IsQ0FBQztRQUU1RCx5Q0FBeUM7UUFDekMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7WUFDbEQsSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwQyxHQUFHO2dCQUNILEtBQUs7Z0JBQ0wsSUFBSTthQUNMLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxPQUFPLEdBQUcsbUJBQW1CLENBQUM7UUFFbEMseUNBQXlDO1FBQ3pDLElBQUksT0FBTyxNQUFNLENBQUMsb0JBQW9CLEtBQUssVUFBVSxFQUFFO1lBQ3JELE9BQU8sR0FBRyxNQUFNLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztnQkFDMUMsR0FBRztnQkFDSCxLQUFLO2dCQUNMLElBQUk7YUFDTCxDQUFDLENBQUM7U0FDSjtRQUVELFNBQVMsQ0FBQztZQUNSLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQyxRQUFRLE1BQU0sWUFBWSxDQUFDLFdBQVcsR0FBRztZQUNoRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDZCxPQUFPO1lBQ1AsSUFBSTtTQUNMLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQztBQUVELGtCQUFlLHFCQUFxQixDQUFDIn0=