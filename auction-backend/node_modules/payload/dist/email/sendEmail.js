"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utilities/logger"));
async function sendEmail(message) {
    let result;
    try {
        const email = await this.email;
        result = email.transport.sendMail(message);
    }
    catch (err) {
        logger_1.default.error(`Failed to send mail to ${message.to}, subject: ${message.subject}`, err);
        return err;
    }
    return result;
}
exports.default = sendEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VtYWlsL3NlbmRFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGlFQUF5QztBQUUxQixLQUFLLFVBQVUsU0FBUyxDQUFDLE9BQWdCO0lBQ3RELElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSTtRQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLGdCQUFNLENBQUMsS0FBSyxDQUNWLDBCQUEwQixPQUFPLENBQUMsRUFBRSxjQUFjLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFDbkUsR0FBRyxDQUNKLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWJELDRCQWFDIn0=