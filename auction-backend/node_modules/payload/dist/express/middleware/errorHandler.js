"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const formatError_1 = __importDefault(require("../responses/formatError"));
// NextFunction must be passed for Express to use this middleware as error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (config, logger) => async (err, req, res, next) => {
    let response = (0, formatError_1.default)(err);
    let status = err.status || http_status_1.default.INTERNAL_SERVER_ERROR;
    logger.error(err.stack);
    if (config.debug && config.debug === true) {
        response.stack = err.stack;
    }
    if (req.collection && typeof req.collection.config.hooks.afterError === 'function') {
        ({ response, status } = await req.collection.config.hooks.afterError(err, response) || { response, status });
    }
    if (typeof config.hooks.afterError === 'function') {
        ({ response, status } = await config.hooks.afterError(err, response) || { response, status });
    }
    res.status(status).send(response);
};
exports.default = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2V4cHJlc3MvbWlkZGxld2FyZS9lcnJvckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBcUM7QUFJckMsMkVBQThFO0FBTTlFLGtGQUFrRjtBQUNsRiw2REFBNkQ7QUFDN0QsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUF1QixFQUFFLE1BQWMsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQWEsRUFBRSxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUEyQyxFQUFFO0lBQ3pMLElBQUksUUFBUSxHQUFHLElBQUEscUJBQW1CLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxxQkFBVSxDQUFDLHFCQUFxQixDQUFDO0lBRTVELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhCLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtRQUN6QyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7S0FDNUI7SUFFRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtRQUNsRixDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUM5RztJQUVELElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7UUFDakQsQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQy9GO0lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsWUFBWSxDQUFDIn0=