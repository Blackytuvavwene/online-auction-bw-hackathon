"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseCookies_1 = __importDefault(require("../utilities/parseCookies"));
const getExtractJWT = (config) => (req) => {
    if (req && req.get) {
        const jwtFromHeader = req.get('Authorization');
        const origin = req.get('Origin');
        if (jwtFromHeader && jwtFromHeader.indexOf('JWT ') === 0) {
            return jwtFromHeader.replace('JWT ', '');
        }
        const cookies = (0, parseCookies_1.default)(req);
        const tokenCookieName = `${config.cookiePrefix}-token`;
        if (cookies && cookies[tokenCookieName]) {
            if (!origin || config.csrf.length === 0 || config.csrf.indexOf(origin) > -1) {
                return cookies[tokenCookieName];
            }
        }
    }
    return null;
};
exports.default = getExtractJWT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RXh0cmFjdEpXVC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2dldEV4dHJhY3RKV1QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSw2RUFBcUQ7QUFFckQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQVksRUFBaUIsRUFBRTtJQUNqRixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFO1FBQ2xCLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqQyxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBQSxzQkFBWSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sZUFBZSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksUUFBUSxDQUFDO1FBRXZELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDM0UsT0FBTyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDakM7U0FDRjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixrQkFBZSxhQUFhLENBQUMifQ==