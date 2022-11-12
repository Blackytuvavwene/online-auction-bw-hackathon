"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const types_1 = require("../config/types");
const errors_1 = require("../errors");
const mockHandler_1 = __importDefault(require("./mockHandler"));
async function handleTransport(transport, email, logger) {
    try {
        await transport.verify();
    }
    catch (err) {
        logger.error('There is an error with the email configuration you have provided.', err);
    }
    return { ...email, transport };
}
const ensureConfigHasFrom = (emailConfig) => {
    if (!emailConfig.fromName || !emailConfig.fromAddress) {
        throw new errors_1.InvalidConfiguration('Email fromName and fromAddress must be configured when transport is configured');
    }
};
const handleMockAccount = async (emailConfig, logger) => {
    let mockAccount;
    try {
        mockAccount = await (0, mockHandler_1.default)(emailConfig);
        const { account: { web, user, pass } } = mockAccount;
        if (emailConfig.logMockCredentials) {
            logger.info('E-mail configured with mock configuration');
            logger.info(`Log into mock email provider at ${web}`);
            logger.info(`Mock email account username: ${user}`);
            logger.info(`Mock email account password: ${pass}`);
        }
    }
    catch (err) {
        logger.error('There was a problem setting up the mock email handler', err);
    }
    return mockAccount;
};
async function buildEmail(emailConfig, logger) {
    if ((0, types_1.hasTransport)(emailConfig) && emailConfig.transport) {
        ensureConfigHasFrom(emailConfig);
        const email = { ...emailConfig };
        const { transport } = emailConfig;
        return handleTransport(transport, email, logger);
    }
    if ((0, types_1.hasTransportOptions)(emailConfig) && emailConfig.transportOptions) {
        ensureConfigHasFrom(emailConfig);
        const email = { ...emailConfig };
        const transport = nodemailer_1.default.createTransport(emailConfig.transportOptions);
        return handleTransport(transport, email, logger);
    }
    return handleMockAccount(emailConfig, logger);
}
exports.default = buildEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZW1haWwvYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBcUQ7QUFFckQsMkNBQWtHO0FBQ2xHLHNDQUFpRDtBQUNqRCxnRUFBd0M7QUFHeEMsS0FBSyxVQUFVLGVBQWUsQ0FBQyxTQUFzQixFQUFFLEtBQXFCLEVBQUUsTUFBYztJQUMxRixJQUFJO1FBQ0YsTUFBTSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDMUI7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE1BQU0sQ0FBQyxLQUFLLENBQ1YsbUVBQW1FLEVBQ25FLEdBQUcsQ0FDSixDQUFDO0tBQ0g7SUFFRCxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDakMsQ0FBQztBQUVELE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtJQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7UUFDckQsTUFBTSxJQUFJLDZCQUFvQixDQUFDLGdGQUFnRixDQUFDLENBQUM7S0FDbEg7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLGlCQUFpQixHQUFHLEtBQUssRUFBRSxXQUF5QixFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQzVFLElBQUksV0FBNkIsQ0FBQztJQUNsQyxJQUFJO1FBQ0YsV0FBVyxHQUFHLE1BQU0sSUFBQSxxQkFBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsV0FBVyxDQUFDO1FBQ3JELElBQUksV0FBVyxDQUFDLGtCQUFrQixFQUFFO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNyRDtLQUNGO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixNQUFNLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzVFO0lBQ0QsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRWEsS0FBSyxVQUFVLFVBQVUsQ0FBQyxXQUF5QixFQUFFLE1BQWM7SUFDaEYsSUFBSSxJQUFBLG9CQUFZLEVBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUN0RCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDakMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUE4QixXQUFXLENBQUM7UUFDN0QsT0FBTyxlQUFlLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNsRDtJQUVELElBQUksSUFBQSwyQkFBbUIsRUFBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7UUFDcEUsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLFdBQVcsRUFBb0IsQ0FBQztRQUNuRCxNQUFNLFNBQVMsR0FBRyxvQkFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRSxPQUFPLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQWhCRCw2QkFnQkMifQ==