"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const buildQuery_1 = __importDefault(require("../mongoose/buildQuery"));
const buildModel_1 = __importDefault(require("./buildModel"));
const getVersionsModelName_1 = require("../versions/getVersionsModelName");
const buildGlobalFields_1 = require("../versions/buildGlobalFields");
const buildSchema_1 = __importDefault(require("../mongoose/buildSchema"));
const mountEndpoints_1 = __importDefault(require("../express/mountEndpoints"));
const buildEndpoints_1 = __importDefault(require("./buildEndpoints"));
function initGlobals(ctx) {
    if (ctx.config.globals) {
        ctx.globals = {
            Model: (0, buildModel_1.default)(ctx.config),
            config: ctx.config.globals,
        };
        ctx.config.globals.forEach((global) => {
            if (global.versions) {
                const versionModelName = (0, getVersionsModelName_1.getVersionsModelName)(global);
                const versionSchema = (0, buildSchema_1.default)(ctx.config, (0, buildGlobalFields_1.buildVersionGlobalFields)(global), {
                    disableUnique: true,
                    options: {
                        timestamps: true,
                    },
                });
                versionSchema.plugin(mongoose_paginate_v2_1.default, { useEstimatedCount: true })
                    .plugin(buildQuery_1.default);
                ctx.versions[global.slug] = mongoose_1.default.model(versionModelName, versionSchema);
            }
        });
        // If not local, open routes
        if (!ctx.local) {
            ctx.config.globals.forEach((global) => {
                const router = express_1.default.Router();
                const { slug } = global;
                const endpoints = (0, buildEndpoints_1.default)(global);
                (0, mountEndpoints_1.default)(ctx.express, router, endpoints);
                ctx.router.use(`/globals/${slug}`, router);
            });
        }
    }
}
exports.default = initGlobals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsd0RBQWdDO0FBQ2hDLGdGQUE0QztBQUM1Qyx3RUFBc0Q7QUFDdEQsOERBQXNDO0FBRXRDLDJFQUF3RTtBQUN4RSxxRUFBeUU7QUFDekUsMEVBQWtEO0FBRWxELCtFQUF1RDtBQUN2RCxzRUFBOEM7QUFHOUMsU0FBd0IsV0FBVyxDQUFDLEdBQVk7SUFDOUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLElBQUEsb0JBQVUsRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzdCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU87U0FDM0IsQ0FBQztRQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3BDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFBLDJDQUFvQixFQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV0RCxNQUFNLGFBQWEsR0FBRyxJQUFBLHFCQUFXLEVBQy9CLEdBQUcsQ0FBQyxNQUFNLEVBQ1YsSUFBQSw0Q0FBd0IsRUFBQyxNQUFNLENBQUMsRUFDaEM7b0JBQ0UsYUFBYSxFQUFFLElBQUk7b0JBQ25CLE9BQU8sRUFBRTt3QkFDUCxVQUFVLEVBQUUsSUFBSTtxQkFDakI7aUJBQ0YsQ0FDRixDQUFDO2dCQUVGLGFBQWEsQ0FBQyxNQUFNLENBQUMsOEJBQVEsRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO3FCQUN4RCxNQUFNLENBQUMsb0JBQWdCLENBQUMsQ0FBQztnQkFFNUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFvQixDQUFDO2FBQ2hHO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUE2QixFQUFFLEVBQUU7Z0JBQzNELE1BQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBRXhCLE1BQU0sU0FBUyxHQUFHLElBQUEsd0JBQWMsRUFBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsSUFBQSx3QkFBYyxFQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUUvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtBQUNILENBQUM7QUExQ0QsOEJBMENDIn0=