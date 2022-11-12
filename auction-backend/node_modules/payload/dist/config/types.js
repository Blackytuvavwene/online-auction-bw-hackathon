"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTransportOptions = exports.hasTransport = void 0;
/**
 * type guard for EmailOptions
 * @param emailConfig
 */
function hasTransport(emailConfig) {
    return emailConfig.transport !== undefined;
}
exports.hasTransport = hasTransport;
/**
 * type guard for EmailOptions
 * @param emailConfig
 */
function hasTransportOptions(emailConfig) {
    return emailConfig.transportOptions !== undefined;
}
exports.hasTransportOptions = hasTransportOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQTZDQTs7O0dBR0c7QUFDSCxTQUFnQixZQUFZLENBQUMsV0FBeUI7SUFDcEQsT0FBUSxXQUE4QixDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7QUFDakUsQ0FBQztBQUZELG9DQUVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsV0FBeUI7SUFDM0QsT0FBUSxXQUFxQyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQztBQUMvRSxDQUFDO0FBRkQsa0RBRUMifQ==