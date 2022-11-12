"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = __importDefault(require("../../errors/APIError"));
const formatErrorResponse = (incoming) => {
    if (incoming) {
        if (incoming instanceof APIError_1.default && incoming.data) {
            return {
                errors: [{
                        name: incoming.name,
                        message: incoming.message,
                        data: incoming.data,
                    }],
            };
        }
        // mongoose
        if (!(incoming instanceof APIError_1.default || incoming instanceof Error) && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors)
                    .reduce((acc, key) => {
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message,
                    });
                    return acc;
                }, []),
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message,
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message,
                    },
                ],
            };
        }
    }
    return {
        errors: [
            {
                message: 'An unknown error occurred.',
            },
        ],
    };
};
exports.default = formatErrorResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0RXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0RXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFBNkM7QUFJN0MsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFFBQXVELEVBQWlCLEVBQUU7SUFDckcsSUFBSSxRQUFRLEVBQUU7UUFDWixJQUFJLFFBQVEsWUFBWSxrQkFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakQsT0FBTztnQkFDTCxNQUFNLEVBQUUsQ0FBQzt3QkFDUCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQ25CLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTzt3QkFDekIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO3FCQUNwQixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBRUQsV0FBVztRQUNYLElBQUksQ0FBQyxDQUFDLFFBQVEsWUFBWSxrQkFBUSxJQUFJLFFBQVEsWUFBWSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25GLE9BQU87Z0JBQ0wsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztxQkFDakMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUNQLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7d0JBQ2hDLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87cUJBQ3RDLENBQUMsQ0FBQztvQkFDSCxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQyxPQUFPO2dCQUNMLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTzthQUN6QixDQUFDO1NBQ0g7UUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTztnQkFDTCxNQUFNLEVBQUU7b0JBQ047d0JBQ0UsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO3FCQUMxQjtpQkFDRjthQUNGLENBQUM7U0FDSDtLQUNGO0lBRUQsT0FBTztRQUNMLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSw0QkFBNEI7YUFDdEM7U0FDRjtLQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxtQkFBbUIsQ0FBQyJ9