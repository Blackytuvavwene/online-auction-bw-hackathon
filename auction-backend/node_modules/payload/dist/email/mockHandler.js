"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const mockEmailHandler = async (emailConfig) => {
    const testAccount = await nodemailer_1.default.createTestAccount();
    const smtpOptions = {
        ...emailConfig,
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        fromName: emailConfig.fromName || 'Payload CMS',
        fromAddress: emailConfig.fromAddress || 'info@payloadcms.com',
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    };
    return {
        account: testAccount,
        transport: nodemailer_1.default.createTransport(smtpOptions),
    };
};
exports.default = mockEmailHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW1haWwvbW9ja0hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBb0M7QUFJcEMsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEVBQUUsV0FBeUIsRUFBNkIsRUFBRTtJQUN0RixNQUFNLFdBQVcsR0FBRyxNQUFNLG9CQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUV6RCxNQUFNLFdBQVcsR0FBRztRQUNsQixHQUFHLFdBQVc7UUFDZCxJQUFJLEVBQUUscUJBQXFCO1FBQzNCLElBQUksRUFBRSxHQUFHO1FBQ1QsTUFBTSxFQUFFLEtBQUs7UUFDYixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsSUFBSSxhQUFhO1FBQy9DLFdBQVcsRUFBRSxXQUFXLENBQUMsV0FBVyxJQUFJLHFCQUFxQjtRQUM3RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDdEIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1NBQ3ZCO0tBQ0YsQ0FBQztJQUVGLE9BQU87UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixTQUFTLEVBQUUsb0JBQVUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO0tBQ25ELENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxnQkFBZ0IsQ0FBQyJ9