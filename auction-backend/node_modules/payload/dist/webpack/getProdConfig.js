"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const css_minimizer_webpack_plugin_1 = __importDefault(require("css-minimizer-webpack-plugin"));
const webpack_bundle_analyzer_1 = require("webpack-bundle-analyzer");
const path_1 = __importDefault(require("path"));
const getBaseConfig_1 = __importDefault(require("./getBaseConfig"));
exports.default = (payloadConfig) => {
    const baseConfig = (0, getBaseConfig_1.default)(payloadConfig);
    let config = {
        ...baseConfig,
        output: {
            publicPath: `${payloadConfig.routes.admin}/`,
            path: path_1.default.resolve(process.cwd(), 'build'),
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js',
        },
        mode: 'production',
        stats: 'errors-only',
        optimization: {
            minimizer: [new terser_webpack_plugin_1.default({}), new css_minimizer_webpack_plugin_1.default()],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(sa|sc|c)ss$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            ...baseConfig.plugins,
            new mini_css_extract_plugin_1.default({
                filename: '[name].css',
                ignoreOrder: true,
            }),
        ],
    };
    config.module.rules.push({
        test: /\.(scss|css)$/,
        sideEffects: true,
        use: [
            mini_css_extract_plugin_1.default.loader,
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
    if (process.env.PAYLOAD_ANALYZE_BUNDLE) {
        config.plugins.push(new webpack_bundle_analyzer_1.BundleAnalyzerPlugin());
    }
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === 'function') {
        config = payloadConfig.admin.webpack(config);
    }
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZENvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL2dldFByb2RDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRkFBbUQ7QUFDbkQsc0ZBQTJEO0FBQzNELGdHQUE4RDtBQUM5RCxxRUFBK0Q7QUFDL0QsZ0RBQXdCO0FBR3hCLG9FQUE0QztBQUU1QyxrQkFBZSxDQUFDLGFBQThCLEVBQWlCLEVBQUU7SUFDL0QsTUFBTSxVQUFVLEdBQUcsSUFBQSx1QkFBYSxFQUFDLGFBQWEsQ0FBUSxDQUFDO0lBRXZELElBQUksTUFBTSxHQUFrQjtRQUMxQixHQUFHLFVBQVU7UUFDYixNQUFNLEVBQUU7WUFDTixVQUFVLEVBQUUsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRztZQUM1QyxJQUFJLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDO1lBQzFDLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsYUFBYSxFQUFFLHVCQUF1QjtTQUN2QztRQUNELElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFlBQVksRUFBRTtZQUNaLFNBQVMsRUFBRSxDQUFDLElBQUksK0JBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLHNDQUFrQixFQUFFLENBQUM7WUFDN0QsV0FBVyxFQUFFO2dCQUNYLFdBQVcsRUFBRTtvQkFDWCxNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFFBQVE7d0JBQ2QsSUFBSSxFQUFFLGdCQUFnQjt3QkFDdEIsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxVQUFVLENBQUMsT0FBTztZQUNyQixJQUFJLGlDQUFvQixDQUFDO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLElBQUk7YUFDbEIsQ0FBQztTQUNIO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLEVBQUUsZUFBZTtRQUNyQixXQUFXLEVBQUUsSUFBSTtRQUNqQixHQUFHLEVBQUU7WUFDSCxpQ0FBb0IsQ0FBQyxNQUFNO1lBQzNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQzdCO2dCQUNFLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUN6QyxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFO3dCQUNkLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztxQkFDakQ7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQy9CO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksOENBQW9CLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtRQUNwRixNQUFNLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==