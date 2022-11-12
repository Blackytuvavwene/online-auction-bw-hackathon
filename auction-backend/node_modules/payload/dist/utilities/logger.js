"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const micro_memoize_1 = __importDefault(require("micro-memoize"));
const defaultLoggerOptions = {
    prettyPrint: {
        ignore: 'pid,hostname',
        translateTime: 'HH:MM:ss',
    },
};
exports.default = (0, micro_memoize_1.default)((name = 'payload', options) => (0, pino_1.default)({
    name: (options === null || options === void 0 ? void 0 : options.name) || name,
    enabled: process.env.DISABLE_LOGGING !== 'true',
    ...(options || defaultLoggerOptions),
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsa0VBQW9DO0FBSXBDLE1BQU0sb0JBQW9CLEdBQUc7SUFDM0IsV0FBVyxFQUFFO1FBQ1gsTUFBTSxFQUFFLGNBQWM7UUFDdEIsYUFBYSxFQUFFLFVBQVU7S0FDMUI7Q0FDRixDQUFDO0FBRUYsa0JBQWUsSUFBQSx1QkFBTyxFQUNwQixDQUFDLElBQUksR0FBRyxTQUFTLEVBQUUsT0FBNEIsRUFBRSxFQUFFLENBQUMsSUFBQSxjQUFJLEVBQUM7SUFDdkQsSUFBSSxFQUFFLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLElBQUksS0FBSSxJQUFJO0lBQzNCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsS0FBSyxNQUFNO0lBQy9DLEdBQUcsQ0FBQyxPQUFPLElBQUksb0JBQW9CLENBQUM7Q0FDckMsQ0FBa0IsQ0FDcEIsQ0FBQyJ9