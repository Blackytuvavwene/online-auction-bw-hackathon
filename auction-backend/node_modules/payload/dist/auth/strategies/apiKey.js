"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_headerapikey_1 = __importDefault(require("passport-headerapikey"));
const crypto_1 = __importDefault(require("crypto"));
const find_1 = __importDefault(require("../../collections/operations/find"));
exports.default = (payload, { Model, config }) => {
    const { secret } = payload;
    const opts = {
        header: 'Authorization',
        prefix: `${config.labels.singular} API-Key `,
    };
    return new passport_headerapikey_1.default(opts, true, async (apiKey, done, req) => {
        const apiKeyIndex = crypto_1.default.createHmac('sha1', secret)
            .update(apiKey)
            .digest('hex');
        try {
            const where = {};
            if (config.auth.verify) {
                where.and = [
                    {
                        // TODO: Search for index
                        apiKeyIndex: {
                            equals: apiKeyIndex,
                        },
                    },
                    {
                        _verified: {
                            not_equals: false,
                        },
                    },
                ];
            }
            else {
                where.apiKeyIndex = {
                    equals: apiKeyIndex,
                };
            }
            const userQuery = await (0, find_1.default)({
                where,
                collection: {
                    Model,
                    config,
                },
                req: req,
                overrideAccess: true,
                depth: config.auth.depth,
            });
            if (userQuery.docs && userQuery.docs.length > 0) {
                const user = userQuery.docs[0];
                user.collection = config.slug;
                user._strategy = 'api-key';
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        catch (err) {
            done(null, false);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpS2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvc3RyYXRlZ2llcy9hcGlLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRkFBbUQ7QUFDbkQsb0RBQTRCO0FBRzVCLDZFQUFxRDtBQUVyRCxrQkFBZSxDQUFDLE9BQWdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQWtCLEVBQUU7SUFDckUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUMzQixNQUFNLElBQUksR0FBRztRQUNYLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxXQUFXO0tBQzdDLENBQUM7SUFFRixPQUFPLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLGdCQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7YUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQixJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQTJCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN0QixLQUFLLENBQUMsR0FBRyxHQUFHO29CQUNWO3dCQUNFLHlCQUF5Qjt3QkFDekIsV0FBVyxFQUFFOzRCQUNYLE1BQU0sRUFBRSxXQUFXO3lCQUNwQjtxQkFDRjtvQkFDRDt3QkFDRSxTQUFTLEVBQUU7NEJBQ1QsVUFBVSxFQUFFLEtBQUs7eUJBQ2xCO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxLQUFLLENBQUMsV0FBVyxHQUFHO29CQUNsQixNQUFNLEVBQUUsV0FBVztpQkFDcEIsQ0FBQzthQUNIO1lBQ0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFBLGNBQUksRUFBQztnQkFDM0IsS0FBSztnQkFDTCxVQUFVLEVBQUU7b0JBQ1YsS0FBSztvQkFDTCxNQUFNO2lCQUNQO2dCQUNELEdBQUcsRUFBRSxHQUFxQjtnQkFDMUIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDekIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDL0MsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9