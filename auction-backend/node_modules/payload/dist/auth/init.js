"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_anonymous_1 = __importDefault(require("passport-anonymous"));
const jwt_1 = __importDefault(require("./strategies/jwt"));
function initAuth(ctx) {
    passport_1.default.use(new passport_anonymous_1.default.Strategy());
    passport_1.default.use('jwt', (0, jwt_1.default)(ctx));
}
exports.default = initAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsNEVBQW1EO0FBRW5ELDJEQUEyQztBQUUzQyxTQUFTLFFBQVEsQ0FBQyxHQUFZO0lBQzVCLGtCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksNEJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvQyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBQSxhQUFXLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIn0=