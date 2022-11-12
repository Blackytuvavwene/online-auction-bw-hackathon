"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const express_1 = __importDefault(require("express"));
const webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
const webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
const getDevConfig_1 = __importDefault(require("./getDevConfig"));
const router = express_1.default.Router();
function initWebpack(config) {
    const webpackDevConfig = (0, getDevConfig_1.default)(config);
    const compiler = (0, webpack_1.default)(webpackDevConfig);
    router.use((0, webpack_dev_middleware_1.default)(compiler, {
        publicPath: webpackDevConfig.output.publicPath,
    }));
    router.use((0, webpack_hot_middleware_1.default)(compiler));
    return router;
}
exports.default = initWebpack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsc0RBQTBDO0FBQzFDLG9GQUEwRDtBQUMxRCxvRkFBMEQ7QUFDMUQsa0VBQWlEO0FBR2pELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEMsU0FBUyxXQUFXLENBQUMsTUFBdUI7SUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLHNCQUFtQixFQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELE1BQU0sUUFBUSxHQUFHLElBQUEsaUJBQU8sRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBQSxnQ0FBb0IsRUFBQyxRQUFRLEVBQUU7UUFDeEMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFvQjtLQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBQSxnQ0FBb0IsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRTNDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxrQkFBZSxXQUFXLENBQUMifQ==