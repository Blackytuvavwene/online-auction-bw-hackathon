"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayloadVersion = exports.sendEvent = void 0;
const child_process_1 = require("child_process");
const conf_1 = __importDefault(require("conf"));
const crypto_1 = require("crypto");
const find_up_1 = __importDefault(require("find-up"));
const fs_1 = __importDefault(require("fs"));
const oneWayHash_1 = require("./oneWayHash");
const sendEvent = async ({ payload, event }) => {
    if (payload.config.telemetry !== false) {
        try {
            const packageJSON = await getPackageJSON();
            const baseEvent = {
                envID: getEnvID(),
                projectID: getProjectID(payload, packageJSON),
                nodeVersion: process.version,
                nodeEnv: process.env.NODE_ENV || 'development',
                payloadVersion: (0, exports.getPayloadVersion)(packageJSON),
            };
            await fetch('https://telemetry.payloadcms.com/events', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...baseEvent, ...event }),
            });
        }
        catch (_) {
            // Eat any errors in sending telemetry event
        }
    }
};
exports.sendEvent = sendEvent;
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */
const getEnvID = () => {
    const conf = new conf_1.default();
    const ENV_ID = 'envID';
    const val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    const generated = (0, crypto_1.randomBytes)(32).toString('hex');
    conf.set(ENV_ID, generated);
    return generated;
};
const getProjectID = (payload, packageJSON) => {
    const projectID = getGitID(payload) || getPackageJSONID(payload, packageJSON) || payload.config.serverURL || process.cwd();
    return (0, oneWayHash_1.oneWayHash)(projectID, payload.secret);
};
const getGitID = (payload) => {
    try {
        const originBuffer = (0, child_process_1.execSync)('git config --local --get remote.origin.url', {
            timeout: 1000,
            stdio: 'pipe',
        });
        return (0, oneWayHash_1.oneWayHash)(String(originBuffer).trim(), payload.secret);
    }
    catch (_) {
        return null;
    }
};
const getPackageJSON = async () => {
    const packageJsonPath = await (0, find_up_1.default)('package.json', { cwd: __dirname });
    const jsonContent = JSON.parse(fs_1.default.readFileSync(packageJsonPath, 'utf-8'));
    return jsonContent;
};
const getPackageJSONID = (payload, packageJSON) => {
    return (0, oneWayHash_1.oneWayHash)(packageJSON.name, payload.secret);
};
const getPayloadVersion = (packageJSON) => {
    var _a, _b;
    return (_b = (_a = packageJSON === null || packageJSON === void 0 ? void 0 : packageJSON.dependencies) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : '';
};
exports.getPayloadVersion = getPayloadVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbGl0aWVzL3RlbGVtZXRyeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpREFBeUM7QUFDekMsZ0RBQXdCO0FBQ3hCLG1DQUFxQztBQUNyQyxzREFBNkI7QUFDN0IsNENBQW9CO0FBSXBCLDZDQUEwQztBQXNCbkMsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBUyxFQUFpQixFQUFFO0lBQzFFLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1FBQ3RDLElBQUk7WUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQWMsRUFBRSxDQUFDO1lBRTNDLE1BQU0sU0FBUyxHQUFjO2dCQUMzQixLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUNqQixTQUFTLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7Z0JBQzdDLFdBQVcsRUFBRSxPQUFPLENBQUMsT0FBTztnQkFDNUIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWE7Z0JBQzlDLGNBQWMsRUFBRSxJQUFBLHlCQUFpQixFQUFDLFdBQVcsQ0FBQzthQUMvQyxDQUFDO1lBRUYsTUFBTSxLQUFLLENBQUMseUNBQXlDLEVBQUU7Z0JBQ3JELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7YUFDakQsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNaLDRDQUE0QztTQUMzQztLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBeEJXLFFBQUEsU0FBUyxhQXdCcEI7QUFFRjs7O0dB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