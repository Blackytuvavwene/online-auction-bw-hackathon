"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const encryptKey = ({ req, value }) => (value ? req.payload.encrypt(value) : undefined);
const decryptKey = ({ req, value }) => (value ? req.payload.decrypt(value) : undefined);
exports.default = [
    {
        name: 'enableAPIKey',
        label: 'Enable API Key',
        type: 'checkbox',
        defaultValue: false,
        admin: {
            components: {
                Field: () => null,
            },
        },
    },
    {
        name: 'apiKey',
        label: 'API Key',
        type: 'text',
        admin: {
            components: {
                Field: () => null,
            },
        },
        hooks: {
            beforeChange: [
                encryptKey,
            ],
            afterRead: [
                decryptKey,
            ],
        },
    },
    {
        name: 'apiKeyIndex',
        type: 'text',
        hidden: true,
        admin: {
            disabled: true,
        },
        hooks: {
            beforeValidate: [
                async ({ data, req, value }) => {
                    if (data.apiKey) {
                        return crypto_1.default.createHmac('sha1', req.payload.secret)
                            .update(data.apiKey)
                            .digest('hex');
                    }
                    if (data.enableAPIKey === false) {
                        return null;
                    }
                    return value;
                },
            ],
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpS2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvYmFzZUZpZWxkcy9hcGlLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFHNUIsTUFBTSxVQUFVLEdBQWMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3RyxNQUFNLFVBQVUsR0FBYyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTdHLGtCQUFlO0lBQ2I7UUFDRSxJQUFJLEVBQUUsY0FBYztRQUNwQixLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCLElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRTtZQUNMLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTthQUNsQjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsS0FBSyxFQUFFLFNBQVM7UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7YUFDbEI7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMLFlBQVksRUFBRTtnQkFDWixVQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsVUFBVTthQUNYO1NBQ0Y7S0FDRjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGFBQWE7UUFDbkIsSUFBSSxFQUFFLE1BQU07UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxjQUFjLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO29CQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2YsT0FBTyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7NkJBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBZ0IsQ0FBQzs2QkFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNsQjtvQkFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO3dCQUMvQixPQUFPLElBQUksQ0FBQztxQkFDYjtvQkFDRCxPQUFPLEtBQUssQ0FBQztnQkFDZixDQUFDO2FBQ0Y7U0FDRjtLQUNGO0NBQ1MsQ0FBQyJ9