"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config) => ((req, res, next) => {
    if (config.cors) {
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Encoding, x-apollo-tracing');
        if (config.cors === '*') {
            res.setHeader('Access-Control-Allow-Origin', '*');
        }
        else if (Array.isArray(config.cors) && config.cors.indexOf(req.headers.origin) > -1) {
            res.header('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        }
    }
    next();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yc0hlYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXhwcmVzcy9taWRkbGV3YXJlL2NvcnNIZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esa0JBQWUsQ0FBQyxNQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUMxQyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ2xELElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtRQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsd0NBQXdDLENBQUMsQ0FBQztRQUNyRixHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLG1HQUFtRyxDQUFDLENBQUM7UUFFaEosSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUN2QixHQUFHLENBQUMsU0FBUyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3JGLEdBQUcsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyxDQUFDIn0=