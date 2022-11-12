"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildConfig = void 0;
const sanitize_1 = __importDefault(require("./sanitize"));
/**
 * @description Builds and validates Payload configuration
 * @param config Payload Config
 * @returns Built and sanitized Payload Config
 */
function buildConfig(config) {
    if (Array.isArray(config.plugins)) {
        const configWithPlugins = config.plugins.reduce((updatedConfig, plugin) => plugin(updatedConfig), config);
        const sanitizedConfig = (0, sanitize_1.default)(configWithPlugins);
        return sanitizedConfig;
    }
    return (0, sanitize_1.default)(config);
}
exports.buildConfig = buildConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLDBEQUFrQztBQUVsQzs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLE1BQWM7SUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqQyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUM3QyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFDaEQsTUFBTSxDQUNQLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxJQUFBLGtCQUFRLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVwRCxPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sSUFBQSxrQkFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFiRCxrQ0FhQyJ9