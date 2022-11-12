"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getExtractJWT_1 = __importDefault(require("../getExtractJWT"));
const refresh_1 = __importDefault(require("../operations/refresh"));
async function refreshHandler(req, res, next) {
    try {
        let token;
        const extractJWT = (0, getExtractJWT_1.default)(req.payload.config);
        token = extractJWT(req);
        if (req.body.token) {
            token = req.body.token;
        }
        const result = await (0, refresh_1.default)({
            req,
            res,
            collection: req.collection,
            token,
        });
        return res.status(200).json({
            message: 'Token refresh successful',
            ...result,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = refreshHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZWZyZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EscUVBQTZDO0FBRTdDLG9FQUE0QztBQUU3QixLQUFLLFVBQVUsY0FBYyxDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ2pHLElBQUk7UUFDRixJQUFJLEtBQUssQ0FBQztRQUVWLE1BQU0sVUFBVSxHQUFHLElBQUEsdUJBQWEsRUFBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNsQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDeEI7UUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsaUJBQU8sRUFBQztZQUMzQixHQUFHO1lBQ0gsR0FBRztZQUNILFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixLQUFLO1NBQ04sQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLEdBQUcsTUFBTTtTQUNWLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUM7QUF6QkQsaUNBeUJDIn0=