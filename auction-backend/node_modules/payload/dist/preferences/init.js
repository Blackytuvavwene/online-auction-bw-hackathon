"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("./model"));
const findOne_1 = __importDefault(require("./requestHandlers/findOne"));
const update_1 = __importDefault(require("./requestHandlers/update"));
const delete_1 = __importDefault(require("./requestHandlers/delete"));
function initPreferences(ctx) {
    ctx.preferences = { Model: model_1.default };
    if (!ctx.local) {
        const router = express_1.default.Router();
        router
            .route('/_preferences/:key')
            .get(findOne_1.default)
            .post(update_1.default)
            .delete(delete_1.default);
        ctx.router.use(router);
    }
}
exports.default = initPreferences;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVmZXJlbmNlcy9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRzlCLG9EQUE0QjtBQUM1Qix3RUFBZ0Q7QUFDaEQsc0VBQThDO0FBQzlDLHNFQUFxRDtBQUVyRCxTQUF3QixlQUFlLENBQUMsR0FBWTtJQUNsRCxHQUFHLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFMLGVBQUssRUFBRSxDQUFDO0lBRTVCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ2QsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQyxNQUFNO2FBQ0gsS0FBSyxDQUFDLG9CQUFvQixDQUFDO2FBQzNCLEdBQUcsQ0FBQyxpQkFBTyxDQUFDO2FBQ1osSUFBSSxDQUFDLGdCQUFNLENBQUM7YUFDWixNQUFNLENBQUMsZ0JBQWEsQ0FBQyxDQUFDO1FBRXpCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQWJELGtDQWFDIn0=