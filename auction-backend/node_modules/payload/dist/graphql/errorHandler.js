"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utilities/logger"));
const logger = (0, logger_1.default)();
/**
 *
 * @param info
 * @param debug
 * @param afterErrorHook
 * @returns {Promise<unknown[]>}
 */
const errorHandler = async (info, debug, afterErrorHook) => Promise.all(info.result.errors.map(async (err) => {
    var _a;
    logger.error(err.stack);
    let response = {
        message: err.message,
        locations: err.locations,
        path: err.path,
        extensions: {
            name: ((_a = err === null || err === void 0 ? void 0 : err.originalError) === null || _a === void 0 ? void 0 : _a.name) || undefined,
            data: (err && err.originalError && err.originalError.data) || undefined,
            stack: debug ? err.stack : undefined,
        },
    };
    if (afterErrorHook) {
        ({ response } = await afterErrorHook(err, response) || { response });
    }
    return response;
}));
exports.default = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JIYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dyYXBocWwvZXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsaUVBQTRDO0FBRTVDLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQVMsR0FBRSxDQUFDO0FBRTNCOzs7Ozs7R0FNRztBQUNILE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBYyxFQUFFLGNBQWMsRUFBb0MsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTs7SUFDdEosTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEIsSUFBSSxRQUFRLEdBQTBCO1FBQ3BDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztRQUNwQixTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVM7UUFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUEsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsYUFBYSwwQ0FBRSxJQUFJLEtBQUksU0FBUztZQUMzQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLGFBQWEsSUFBSSxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVM7WUFDdkUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNyQztLQUNGLENBQUM7SUFFRixJQUFJLGNBQWMsRUFBRTtRQUNsQixDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN0RTtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFSixrQkFBZSxZQUFZLENBQUMifQ==