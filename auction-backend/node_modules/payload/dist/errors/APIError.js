"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-classes-per-file */
const http_status_1 = __importDefault(require("http-status"));
/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor(message, status, data, isPublic) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.data = data;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore Couldn't get the compiler to love me
        Error.captureStackTrace(this, this.constructor.name);
    }
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {object} data - response data to be returned.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message, status = http_status_1.default.INTERNAL_SERVER_ERROR, data = null, isPublic = false) {
        super(message, status, data, isPublic);
    }
}
exports.default = APIError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3JzL0FQSUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhEQUFxQztBQUVyQzs7R0FFRztBQUNILE1BQU0sZUFBZ0IsU0FBUSxLQUFLO0lBU2pDLFlBQVksT0FBZSxFQUFFLE1BQWMsRUFBRSxJQUFnQyxFQUFFLFFBQWlCO1FBQzlGLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQywrREFBK0Q7UUFDMUYsNkRBQTZEO1FBQzdELGtEQUFrRDtRQUNsRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxRQUFTLFNBQVEsZUFBZTtJQUNwQzs7Ozs7O09BTUc7SUFDSCxZQUFZLE9BQWUsRUFBRSxTQUFpQixxQkFBVSxDQUFDLHFCQUFxQixFQUFFLE9BQVksSUFBSSxFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ2hILEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxRQUFRLENBQUMifQ==