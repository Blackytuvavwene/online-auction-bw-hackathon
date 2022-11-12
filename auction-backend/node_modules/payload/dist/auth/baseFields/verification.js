"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autoRemoveVerificationToken = ({ originalDoc, data, value, operation }) => {
    // If a user manually sets `_verified` to true,
    // and it was `false`, set _verificationToken to `null`.
    // This is useful because the admin panel
    // allows users to set `_verified` to true manually
    if (operation === 'update') {
        if ((data === null || data === void 0 ? void 0 : data._verified) === true && (originalDoc === null || originalDoc === void 0 ? void 0 : originalDoc._verified) === false) {
            return null;
        }
    }
    return value;
};
exports.default = [
    {
        name: '_verified',
        type: 'checkbox',
        access: {
            create: () => false,
            update: ({ req: { user } }) => Boolean(user),
            read: ({ req: { user } }) => Boolean(user),
        },
        admin: {
            components: {
                Field: () => null,
            },
        },
    },
    {
        name: '_verificationToken',
        type: 'text',
        hidden: true,
        hooks: {
            beforeChange: [
                autoRemoveVerificationToken,
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvYmFzZUZpZWxkcy92ZXJpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLDJCQUEyQixHQUFjLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3pGLCtDQUErQztJQUMvQyx3REFBd0Q7SUFDeEQseUNBQXlDO0lBQ3pDLG1EQUFtRDtJQUVuRCxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDMUIsSUFBSSxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxTQUFTLE1BQUssSUFBSSxJQUFJLENBQUEsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFNBQVMsTUFBSyxLQUFLLEVBQUU7WUFDaEUsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFRixrQkFBZTtJQUNiO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztTQUMzQztRQUNELEtBQUssRUFBRTtZQUNMLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTthQUNsQjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRTtZQUNMLFlBQVksRUFBRTtnQkFDWiwyQkFBMkI7YUFDNUI7U0FDRjtLQUNGO0NBQ1MsQ0FBQyJ9