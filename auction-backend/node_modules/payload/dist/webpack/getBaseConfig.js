"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const webpack_1 = __importDefault(require("webpack"));
const babel_config_1 = __importDefault(require("../babel.config"));
const mockModulePath = path_1.default.resolve(__dirname, './mocks/emptyModule.js');
const mockDotENVPath = path_1.default.resolve(__dirname, './mocks/dotENV.js');
exports.default = (config) => ({
    entry: {
        main: [
            path_1.default.resolve(__dirname, '../admin'),
        ],
    },
    resolveLoader: {
        modules: ['node_modules', path_1.default.join(__dirname, '../../node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules[\\/](?!(@payloadcms[\\/]payload)[\\/]).*/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: babel_config_1.default,
                    },
                ],
            },
            {
                oneOf: [
                    {
                        test: /\.(?:ico|gif|png|jpg|jpeg|woff(2)?|eot|ttf|otf|svg)$/i,
                        type: 'asset/resource',
                    },
                ],
            },
        ],
    },
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
            crypto: false,
            https: false,
            http: false,
        },
        modules: ['node_modules', path_1.default.resolve(__dirname, '../../node_modules')],
        alias: {
            'payload-config': config.paths.config,
            payload$: mockModulePath,
            'payload-user-css': config.admin.css,
            dotenv: mockDotENVPath,
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new webpack_1.default.ProvidePlugin({ process: 'process/browser' }),
        new webpack_1.default.DefinePlugin(Object.entries(process.env).reduce((values, [key, val]) => {
            if (key.indexOf('PAYLOAD_PUBLIC_') === 0) {
                return ({
                    ...values,
                    [`process.env.${key}`]: `'${val}'`,
                });
            }
            return values;
        }, {})),
        new html_webpack_plugin_1.default({
            template: config.admin.indexHTML,
            filename: path_1.default.normalize('./index.html'),
        }),
        new webpack_1.default.HotModuleReplacementPlugin(),
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QmFzZUNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJwYWNrL2dldEJhc2VDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsOEVBQW9EO0FBQ3BELHNEQUFpRDtBQUVqRCxtRUFBMEM7QUFFMUMsTUFBTSxjQUFjLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUN6RSxNQUFNLGNBQWMsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRXBFLGtCQUFlLENBQUMsTUFBdUIsRUFBaUIsRUFBRSxDQUFDLENBQUM7SUFDMUQsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFO1lBQ0osY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1NBQ3BDO0tBQ0Y7SUFDRCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztLQUN0RTtJQUNELE1BQU0sRUFBRTtRQUNOLEtBQUssRUFBRTtZQUNMO2dCQUNFLElBQUksRUFBRSxhQUFhO2dCQUNuQixPQUFPLEVBQUUsdURBQXVEO2dCQUNoRSxHQUFHLEVBQUU7b0JBQ0g7d0JBQ0UsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO3dCQUN2QyxPQUFPLEVBQUUsc0JBQVc7cUJBQ3JCO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLHVEQUF1RDt3QkFDN0QsSUFBSSxFQUFFLGdCQUFnQjtxQkFDdkI7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUN4QyxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1lBQ1osSUFBSSxFQUFFLEtBQUs7U0FDWjtRQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hFLEtBQUssRUFBRTtZQUNMLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUNyQyxRQUFRLEVBQUUsY0FBYztZQUN4QixrQkFBa0IsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDcEMsTUFBTSxFQUFFLGNBQWM7U0FDdkI7UUFDRCxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7S0FDNUM7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLGlCQUFPLENBQUMsYUFBYSxDQUN2QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUMvQjtRQUNELElBQUksaUJBQU8sQ0FBQyxZQUFZLENBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FDaEMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNyQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQztvQkFDTixHQUFHLE1BQU07b0JBQ1QsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUc7aUJBQ25DLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUNGO1FBQ0QsSUFBSSw2QkFBaUIsQ0FBQztZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQ2hDLFFBQVEsRUFBRSxjQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztTQUN6QyxDQUFDO1FBQ0YsSUFBSSxpQkFBTyxDQUFDLDBCQUEwQixFQUFFO0tBQ3pDO0NBQ0YsQ0FBQyxDQUFDIn0=