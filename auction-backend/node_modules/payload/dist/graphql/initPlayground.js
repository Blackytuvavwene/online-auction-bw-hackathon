"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
function initPlayground(ctx) {
    if ((!ctx.config.graphQL.disable && !ctx.config.graphQL.disablePlaygroundInProduction && process.env.NODE_ENV === 'production') || process.env.NODE_ENV !== 'production') {
        ctx.router.get(ctx.config.routes.graphQLPlayground, (0, graphql_playground_middleware_express_1.default)({
            endpoint: `${ctx.config.routes.api}${ctx.config.routes.graphQL}`,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore ISettings interface has all properties required for some reason
            settings: {
                'request.credentials': 'include',
            },
        }));
    }
}
exports.default = initPlayground;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdFBsYXlncm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC9pbml0UGxheWdyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtIQUFzRTtBQUd0RSxTQUFTLGNBQWMsQ0FBQyxHQUFZO0lBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDZCQUE2QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtRQUN4SyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFBLCtDQUFpQixFQUFDO1lBQ3BFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDaEUsNkRBQTZEO1lBQzdELDZFQUE2RTtZQUM3RSxRQUFRLEVBQUU7Z0JBQ1IscUJBQXFCLEVBQUUsU0FBUzthQUNqQztTQUNGLENBQUMsQ0FBQyxDQUFDO0tBQ0w7QUFDSCxDQUFDO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=