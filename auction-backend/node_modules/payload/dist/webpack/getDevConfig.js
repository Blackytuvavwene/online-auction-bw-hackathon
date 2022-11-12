"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const getBaseConfig_1 = __importDefault(require("./getBaseConfig"));
exports.default = (payloadConfig) => {
    const baseConfig = (0, getBaseConfig_1.default)(payloadConfig);
    let config = {
        ...baseConfig,
        cache: {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename],
            },
        },
        entry: {
            ...baseConfig.entry,
            main: [
                require.resolve('webpack-hot-middleware/client'),
                ...baseConfig.entry.main,
            ],
        },
        output: {
            publicPath: payloadConfig.routes.admin,
            path: '/',
            filename: '[name].js',
        },
        devtool: 'inline-source-map',
        mode: 'development',
        stats: 'errors-warnings',
        plugins: [
            ...baseConfig.plugins,
            new webpack_1.default.HotModuleReplacementPlugin(),
        ],
    };
    config.module.rules.push({
        test: /\.(scss|css)$/,
        sideEffects: true,
        use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    postcssOptions: {
                        plugins: [require.resolve('postcss-preset-env')],
                    },
                },
            },
            require.resolve('sass-loader'),
        ],
    });
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === 'function') {
        config = payloadConfig.admin.webpack(config);
    }
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGV2Q29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3dlYnBhY2svZ2V0RGV2Q29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQWlEO0FBRWpELG9FQUE0QztBQUU1QyxrQkFBZSxDQUFDLGFBQThCLEVBQWlCLEVBQUU7SUFDL0QsTUFBTSxVQUFVLEdBQUcsSUFBQSx1QkFBYSxFQUFDLGFBQWEsQ0FBUSxDQUFDO0lBRXZELElBQUksTUFBTSxHQUFrQjtRQUMxQixHQUFHLFVBQVU7UUFDYixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsWUFBWTtZQUNsQixpQkFBaUIsRUFBRTtnQkFDakIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxHQUFHLFVBQVUsQ0FBQyxLQUFLO1lBQ25CLElBQUksRUFBRTtnQkFDSixPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO2dCQUNoRCxHQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBaUI7YUFDdkM7U0FDRjtRQUNELE1BQU0sRUFBRTtZQUNOLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUs7WUFDdEMsSUFBSSxFQUFFLEdBQUc7WUFDVCxRQUFRLEVBQUUsV0FBVztTQUN0QjtRQUNELE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixPQUFPLEVBQUU7WUFDUCxHQUFHLFVBQVUsQ0FBQyxPQUFPO1lBQ3JCLElBQUksaUJBQU8sQ0FBQywwQkFBMEIsRUFBRTtTQUN6QztLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxFQUFFLGVBQWU7UUFDckIsV0FBVyxFQUFFLElBQUk7UUFDakIsR0FBRyxFQUFFO1lBQ0gsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDN0I7Z0JBQ0UsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUU7d0JBQ2QsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3FCQUNqRDtpQkFDRjthQUNGO1lBQ0QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDL0I7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFO1FBQ3BGLE1BQU0sR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9