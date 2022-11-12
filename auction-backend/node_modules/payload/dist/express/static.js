"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const path_1 = __importDefault(require("path"));
const getExecuteStaticAccess_1 = __importDefault(require("../auth/getExecuteStaticAccess"));
const authenticate_1 = __importDefault(require("./middleware/authenticate"));
const corsHeaders_1 = __importDefault(require("./middleware/corsHeaders"));
function initStatic(ctx) {
    Object.entries(ctx.collections).forEach(([_, collection]) => {
        var _a;
        const { config } = collection;
        if (config.upload) {
            const router = express_1.default.Router();
            router.use((0, corsHeaders_1.default)(ctx.config));
            router.use(passport_1.default.initialize());
            router.use((0, authenticate_1.default)(ctx.config));
            router.use((0, getExecuteStaticAccess_1.default)(collection));
            if (Array.isArray((_a = config.upload) === null || _a === void 0 ? void 0 : _a.handlers)) {
                router.get('/:filename*', config.upload.handlers);
            }
            const staticPath = path_1.default.resolve(ctx.config.paths.configDir, config.upload.staticDir);
            router.use(express_1.default.static(staticPath, config.upload.staticOptions || {}));
            ctx.express.use(`${config.upload.staticURL}`, router);
        }
    });
}
exports.default = initStatic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2V4cHJlc3Mvc3RhdGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHdEQUFnQztBQUNoQyxnREFBd0I7QUFDeEIsNEZBQW9FO0FBQ3BFLDZFQUFxRDtBQUVyRCwyRUFBbUQ7QUFFbkQsU0FBUyxVQUFVLENBQUMsR0FBWTtJQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFOztRQUMxRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBRTlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBQSxxQkFBVyxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBQSxzQkFBWSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBQSxnQ0FBc0IsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRS9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFBLE1BQU0sQ0FBQyxNQUFNLDBDQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1lBRUQsTUFBTSxVQUFVLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVyRixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9