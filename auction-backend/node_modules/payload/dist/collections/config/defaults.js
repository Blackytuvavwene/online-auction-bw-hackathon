"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authDefaults = exports.defaults = void 0;
const defaultAccess_1 = __importDefault(require("../../auth/defaultAccess"));
exports.defaults = {
    access: {
        create: defaultAccess_1.default,
        read: defaultAccess_1.default,
        update: defaultAccess_1.default,
        delete: defaultAccess_1.default,
        unlock: defaultAccess_1.default,
    },
    timestamps: true,
    admin: {
        useAsTitle: 'id',
        components: {},
        enableRichTextRelationship: true,
        pagination: {
            defaultLimit: 10,
            limits: [5, 10, 25, 50, 100],
        },
    },
    fields: [],
    hooks: {
        beforeOperation: [],
        beforeValidate: [],
        beforeChange: [],
        afterChange: [],
        beforeRead: [],
        afterRead: [],
        beforeDelete: [],
        afterDelete: [],
        beforeLogin: [],
        afterLogin: [],
        afterLogout: [],
        afterRefresh: [],
        afterMe: [],
        afterForgotPassword: [],
    },
    endpoints: [],
    auth: false,
    upload: false,
    versions: false,
};
exports.authDefaults = {
    tokenExpiration: 7200,
    maxLoginAttempts: 5,
    lockTime: 600000,
    cookies: {
        secure: false,
        sameSite: 'Lax',
    },
    verify: false,
    forgotPassword: {},
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvY29uZmlnL2RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFxRDtBQUV4QyxRQUFBLFFBQVEsR0FBRztJQUN0QixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsdUJBQWE7UUFDckIsSUFBSSxFQUFFLHVCQUFhO1FBQ25CLE1BQU0sRUFBRSx1QkFBYTtRQUNyQixNQUFNLEVBQUUsdUJBQWE7UUFDckIsTUFBTSxFQUFFLHVCQUFhO0tBQ3RCO0lBQ0QsVUFBVSxFQUFFLElBQUk7SUFDaEIsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLElBQUk7UUFDaEIsVUFBVSxFQUFFLEVBQUU7UUFDZCwwQkFBMEIsRUFBRSxJQUFJO1FBQ2hDLFVBQVUsRUFBRTtZQUNWLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7U0FDN0I7S0FDRjtJQUNELE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFO1FBQ0wsZUFBZSxFQUFFLEVBQUU7UUFDbkIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsV0FBVyxFQUFFLEVBQUU7UUFDZixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsWUFBWSxFQUFFLEVBQUU7UUFDaEIsV0FBVyxFQUFFLEVBQUU7UUFDZixXQUFXLEVBQUUsRUFBRTtRQUNmLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7UUFDZixZQUFZLEVBQUUsRUFBRTtRQUNoQixPQUFPLEVBQUUsRUFBRTtRQUNYLG1CQUFtQixFQUFFLEVBQUU7S0FDeEI7SUFDRCxTQUFTLEVBQUUsRUFBRTtJQUNiLElBQUksRUFBRSxLQUFLO0lBQ1gsTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUc7SUFDMUIsZUFBZSxFQUFFLElBQUk7SUFDckIsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQixRQUFRLEVBQUUsTUFBTTtJQUNoQixPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsS0FBSztRQUNiLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsTUFBTSxFQUFFLEtBQUs7SUFDYixjQUFjLEVBQUUsRUFBRTtDQUNuQixDQUFDIn0=