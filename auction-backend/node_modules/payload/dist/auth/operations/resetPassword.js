"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../errors");
const getCookieExpiration_1 = __importDefault(require("../../utilities/getCookieExpiration"));
const types_1 = require("../../fields/config/types");
async function resetPassword(args) {
    if (!Object.prototype.hasOwnProperty.call(args.data, 'token')
        || !Object.prototype.hasOwnProperty.call(args.data, 'password')) {
        throw new errors_1.APIError('Missing required data.');
    }
    const { collection: { Model, config: collectionConfig, }, req: { payload: { config, secret, }, payload, }, overrideAccess, data, } = args;
    // /////////////////////////////////////
    // Reset Password
    // /////////////////////////////////////
    const user = await Model.findOne({
        resetPasswordToken: data.token,
        resetPasswordExpiration: { $gt: Date.now() },
    });
    if (!user)
        throw new errors_1.APIError('Token is either invalid or has expired.');
    await user.setPassword(data.password);
    user.resetPasswordExpiration = Date.now();
    await user.save();
    await user.authenticate(data.password);
    const fieldsToSign = collectionConfig.fields.reduce((signedFields, field) => {
        if ((0, types_1.fieldAffectsData)(field) && field.saveToJWT) {
            return {
                ...signedFields,
                [field.name]: user[field.name],
            };
        }
        return signedFields;
    }, {
        email: user.email,
        id: user.id,
        collection: collectionConfig.slug,
    });
    const token = jsonwebtoken_1.default.sign(fieldsToSign, secret, {
        expiresIn: collectionConfig.auth.tokenExpiration,
    });
    if (args.res) {
        const cookieOptions = {
            path: '/',
            httpOnly: true,
            expires: (0, getCookieExpiration_1.default)(collectionConfig.auth.tokenExpiration),
            secure: collectionConfig.auth.cookies.secure,
            sameSite: collectionConfig.auth.cookies.sameSite,
            domain: undefined,
        };
        if (collectionConfig.auth.cookies.domain)
            cookieOptions.domain = collectionConfig.auth.cookies.domain;
        args.res.cookie(`${config.cookiePrefix}-token`, token, cookieOptions);
    }
    const fullUser = await payload.findByID({ collection: collectionConfig.slug, id: user.id, overrideAccess });
    return { token, user: fullUser };
}
exports.default = resetPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVzZXRQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUErQjtBQUcvQix5Q0FBd0M7QUFDeEMsOEZBQXNFO0FBRXRFLHFEQUE2RDtBQW1CN0QsS0FBSyxVQUFVLGFBQWEsQ0FBQyxJQUFlO0lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7V0FDeEQsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRTtRQUNqRSxNQUFNLElBQUksaUJBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzlDO0lBRUQsTUFBTSxFQUNKLFVBQVUsRUFBRSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQUUsZ0JBQWdCLEdBQ3pCLEVBQ0QsR0FBRyxFQUFFLEVBQ0gsT0FBTyxFQUFFLEVBQ1AsTUFBTSxFQUNOLE1BQU0sR0FDUCxFQUNELE9BQU8sR0FDUixFQUNELGNBQWMsRUFDZCxJQUFJLEdBQ0wsR0FBRyxJQUFJLENBQUM7SUFFVCx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUV4QyxNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDL0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDOUIsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO0tBQzdDLENBQWlCLENBQUM7SUFFbkIsSUFBSSxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksaUJBQVEsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUUxQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVsQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sWUFBWSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDMUUsSUFBSSxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTztnQkFDTCxHQUFHLFlBQVk7Z0JBQ2YsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDL0IsQ0FBQztTQUNIO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2pCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO0tBQ2xDLENBQUMsQ0FBQztJQUVILE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUNwQixZQUFZLEVBQ1osTUFBTSxFQUNOO1FBQ0UsU0FBUyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlO0tBQ2pELENBQ0YsQ0FBQztJQUVGLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNaLE1BQU0sYUFBYSxHQUFHO1lBQ3BCLElBQUksRUFBRSxHQUFHO1lBQ1QsUUFBUSxFQUFFLElBQUk7WUFDZCxPQUFPLEVBQUUsSUFBQSw2QkFBbUIsRUFBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ25FLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDNUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUNoRCxNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDO1FBR0YsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU07WUFBRSxhQUFhLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXRHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksUUFBUSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztLQUN2RTtJQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUM1RyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRUQsa0JBQWUsYUFBYSxDQUFDIn0=