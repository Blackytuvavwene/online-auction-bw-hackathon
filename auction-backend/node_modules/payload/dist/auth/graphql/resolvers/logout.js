"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logout_1 = __importDefault(require("../../operations/logout"));
function logoutResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            res: context.res,
            req: context.req,
        };
        const result = await (0, logout_1.default)(options);
        return result;
    }
    return resolver;
}
exports.default = logoutResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvbG9nb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EscUVBQTZDO0FBRTdDLFNBQVMsY0FBYyxDQUFDLFVBQXNCO0lBQzVDLEtBQUssVUFBVSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3RDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVTtZQUNWLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztZQUNoQixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDakIsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQkFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=