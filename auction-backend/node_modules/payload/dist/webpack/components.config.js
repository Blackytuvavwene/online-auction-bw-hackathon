"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
const css_minimizer_webpack_plugin_1 = __importDefault(require("css-minimizer-webpack-plugin"));
exports.default = {
    entry: {
        main: [path_1.default.resolve(__dirname, '../admin/components/index.js')],
    },
    externals: {
        react: 'react',
    },
    output: {
        path: path_1.default.resolve(__dirname, '../../components'),
        publicPath: '/',
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    optimization: {
        minimizer: [new terser_webpack_plugin_1.default({
                extractComments: false,
            }), new css_minimizer_webpack_plugin_1.default({})],
    },
    mode: 'production',
    stats: 'errors-only',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(sa|sc|c)ss$/,
                        sideEffects: true,
                        use: [
                            mini_css_extract_plugin_1.default.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            'postcss-preset-env',
                                        ],
                                    },
                                },
                            },
                            'sass-loader',
                        ],
                    },
                    {
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new mini_css_extract_plugin_1.default({
            filename: 'styles.css',
            ignoreOrder: true,
        }),
    ],
    resolve: {
        alias: {
            'payload-scss-overrides': path_1.default.resolve(__dirname, '../admin/scss/overrides.scss'),
        },
        modules: ['node_modules', path_1.default.resolve(__dirname, '../../node_modules')],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvd2VicGFjay9jb21wb25lbnRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixzRkFBMkQ7QUFDM0Qsa0ZBQW1EO0FBQ25ELGdHQUFtRTtBQUVuRSxrQkFBZTtJQUNiLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDLENBQUM7S0FDaEU7SUFDRCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDO1FBQ2pELFVBQVUsRUFBRSxHQUFHO1FBQ2YsUUFBUSxFQUFFLFVBQVU7UUFDcEIsYUFBYSxFQUFFLFdBQVc7S0FDM0I7SUFDRCxZQUFZLEVBQUU7UUFDWixTQUFTLEVBQUUsQ0FBQyxJQUFJLCtCQUFjLENBQUM7Z0JBQzdCLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCLENBQUMsRUFBRSxJQUFJLHNDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxFQUFFLFlBQVk7SUFDbEIsS0FBSyxFQUFFLGFBQWE7SUFDcEIsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLEdBQUcsRUFBRTtvQkFDSCxNQUFNLEVBQUUsY0FBYztpQkFDdkI7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7d0JBQ2hELE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzt3QkFDckMsT0FBTyxFQUFFOzRCQUNQLEtBQUssRUFBRSxLQUFLOzRCQUNaLElBQUksRUFBRSxvQ0FBb0M7eUJBQzNDO3FCQUNGO29CQUNEO3dCQUNFLElBQUksRUFBRSxnQkFBZ0I7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3dCQUNqQixHQUFHLEVBQUU7NEJBQ0gsaUNBQW9CLENBQUMsTUFBTTs0QkFDM0IsWUFBWTs0QkFDWjtnQ0FDRSxNQUFNLEVBQUUsZ0JBQWdCO2dDQUN4QixPQUFPLEVBQUU7b0NBQ1AsY0FBYyxFQUFFO3dDQUNkLE9BQU8sRUFBRTs0Q0FDUCxvQkFBb0I7eUNBQ3JCO3FDQUNGO2lDQUNGOzZCQUNGOzRCQUNELGFBQWE7eUJBQ2Q7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQzt3QkFDbEQsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUN0QyxPQUFPLEVBQUU7NEJBQ1AsSUFBSSxFQUFFLG9DQUFvQzt5QkFDM0M7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLGlDQUFvQixDQUFDO1lBQ3ZCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7S0FDSDtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRTtZQUNMLHdCQUF3QixFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDO1NBQ2xGO1FBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDekU7Q0FDRixDQUFDIn0=