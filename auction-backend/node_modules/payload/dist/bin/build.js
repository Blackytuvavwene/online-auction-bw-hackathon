"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const webpack_1 = __importDefault(require("webpack"));
const getProdConfig_1 = __importDefault(require("../webpack/getProdConfig"));
const find_1 = __importDefault(require("../config/find"));
const load_1 = __importDefault(require("../config/load"));
const configPath = (0, find_1.default)();
const build = () => {
    try {
        const config = (0, load_1.default)();
        const webpackProdConfig = (0, getProdConfig_1.default)({
            ...config,
            paths: {
                ...(config.paths || {}),
                config: configPath,
            },
        });
        (0, webpack_1.default)(webpackProdConfig, (err, stats) => {
            if (err || stats.hasErrors()) {
                // Handle errors here
                if (stats) {
                    console.error(stats.toString({
                        chunks: false,
                        colors: true,
                    }));
                }
                else {
                    console.error(err.message);
                }
            }
        });
    }
    catch (err) {
        console.error(err);
        throw new Error(`Error: can't find the configuration file located at ${configPath}.`);
    }
};
exports.build = build;
// when build.js is launched directly
if (module.id === require.main.id) {
    (0, exports.build)();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL2J1aWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1REFBdUQ7QUFDdkQsbUNBQW1DOzs7Ozs7QUFFbkMsc0RBQThCO0FBQzlCLDZFQUE0RDtBQUM1RCwwREFBd0M7QUFDeEMsMERBQXdDO0FBRXhDLE1BQU0sVUFBVSxHQUFHLElBQUEsY0FBVSxHQUFFLENBQUM7QUFFekIsTUFBTSxLQUFLLEdBQUcsR0FBUyxFQUFFO0lBQzlCLElBQUk7UUFDRixNQUFNLE1BQU0sR0FBRyxJQUFBLGNBQVUsR0FBRSxDQUFDO1FBQzVCLE1BQU0saUJBQWlCLEdBQUcsSUFBQSx1QkFBb0IsRUFBQztZQUM3QyxHQUFHLE1BQU07WUFDVCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUN2QixNQUFNLEVBQUUsVUFBVTthQUNuQjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUEsaUJBQU8sRUFBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4QyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzVCLHFCQUFxQjtnQkFFckIsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO3dCQUMzQixNQUFNLEVBQUUsS0FBSzt3QkFDYixNQUFNLEVBQUUsSUFBSTtxQkFDYixDQUFDLENBQUMsQ0FBQztpQkFDTDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsVUFBVSxHQUFHLENBQUMsQ0FBQztLQUN2RjtBQUNILENBQUMsQ0FBQztBQTdCVyxRQUFBLEtBQUssU0E2QmhCO0FBRUYscUNBQXFDO0FBQ3JDLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUNqQyxJQUFBLGFBQUssR0FBRSxDQUFDO0NBQ1QifQ==