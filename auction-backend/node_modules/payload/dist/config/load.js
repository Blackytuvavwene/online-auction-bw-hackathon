"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../utilities/logger"));
const find_1 = __importDefault(require("./find"));
const validate_1 = __importDefault(require("./validate"));
const babel_config_1 = __importDefault(require("../babel.config"));
const removedExtensions = ['.scss', '.css', '.svg', '.png', '.jpg', '.eot', '.ttf', '.woff', '.woff2'];
const loadConfig = (logger) => {
    const localLogger = logger !== null && logger !== void 0 ? logger : (0, logger_1.default)();
    const configPath = (0, find_1.default)();
    removedExtensions.forEach((ext) => {
        require.extensions[ext] = () => null;
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@babel/register')({
        ...babel_config_1.default,
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        env: {
            development: {
                sourceMaps: 'inline',
                retainLines: true,
            },
        },
        ignore: [
            /node_modules[\\/](?!.pnpm[\\/].*[\\/]node_modules[\\/])(?!payload[\\/]dist[\\/]admin|payload[\\/]components).*/,
        ],
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let config = require(configPath);
    if (config.default)
        config = config.default;
    const validatedConfig = (0, validate_1.default)(config, localLogger);
    return {
        ...validatedConfig,
        paths: {
            ...(validatedConfig.paths || {}),
            configDir: path_1.default.dirname(configPath),
            config: configPath,
        },
    };
};
exports.default = loadConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUE4QztBQUM5QyxtQ0FBbUM7QUFDbkMsZ0RBQXdCO0FBRXhCLGlFQUF5QztBQUV6QyxrREFBZ0M7QUFDaEMsMERBQWtDO0FBQ2xDLG1FQUEwQztBQUUxQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUV2RyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQW9CLEVBQW1CLEVBQUU7SUFDM0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxhQUFOLE1BQU0sY0FBTixNQUFNLEdBQUksSUFBQSxnQkFBTSxHQUFFLENBQUM7SUFDdkMsTUFBTSxVQUFVLEdBQUcsSUFBQSxjQUFVLEdBQUUsQ0FBQztJQUVoQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNoQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVILDhEQUE4RDtJQUM5RCxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN6QixHQUFHLHNCQUFXO1FBQ2QsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQzFDLEdBQUcsRUFBRTtZQUNILFdBQVcsRUFBRTtnQkFDWCxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLElBQUk7YUFDbEI7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLGdIQUFnSDtTQUNqSDtLQUNGLENBQUMsQ0FBQztJQUVILDhEQUE4RDtJQUM5RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFakMsSUFBSSxNQUFNLENBQUMsT0FBTztRQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRTVDLE1BQU0sZUFBZSxHQUFHLElBQUEsa0JBQVEsRUFBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFdEQsT0FBTztRQUNMLEdBQUcsZUFBZTtRQUNsQixLQUFLLEVBQUU7WUFDTCxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDaEMsU0FBUyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxVQUFVO1NBQ25CO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyJ9