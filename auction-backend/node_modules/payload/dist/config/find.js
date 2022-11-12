"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const find_up_1 = __importDefault(require("find-up"));
const findConfig = () => {
    // If the developer has specified a config path,
    // format it if relative and use it directly if absolute
    if (process.env.PAYLOAD_CONFIG_PATH) {
        if (path_1.default.isAbsolute(process.env.PAYLOAD_CONFIG_PATH)) {
            return process.env.PAYLOAD_CONFIG_PATH;
        }
        return path_1.default.resolve(process.cwd(), process.env.PAYLOAD_CONFIG_PATH);
    }
    const configPath = find_up_1.default.sync((dir) => {
        const tsPath = path_1.default.join(dir, 'payload.config.ts');
        const hasTS = find_up_1.default.sync.exists(tsPath);
        if (hasTS)
            return tsPath;
        const jsPath = path_1.default.join(dir, 'payload.config.js');
        const hasJS = find_up_1.default.sync.exists(jsPath);
        if (hasJS)
            return jsPath;
        return undefined;
    });
    if (configPath)
        return configPath;
    throw new Error('Error: cannot find Payload config. Please create a configuration file located at the root of your current working directory called "payload.config.js" or "payload.config.ts".');
};
exports.default = findConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZmluZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixzREFBNkI7QUFFN0IsTUFBTSxVQUFVLEdBQUcsR0FBVyxFQUFFO0lBQzlCLGdEQUFnRDtJQUNoRCx3REFBd0Q7SUFDeEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFO1FBQ25DLElBQUksY0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDcEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1NBQ3hDO1FBRUQsT0FBTyxjQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDckU7SUFFRCxNQUFNLFVBQVUsR0FBRyxpQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDO1FBRXpCLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDO1FBRXpCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxVQUFVO1FBQUUsT0FBTyxVQUFVLENBQUM7SUFFbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnTEFBZ0wsQ0FBQyxDQUFDO0FBQ3BNLENBQUMsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyJ9