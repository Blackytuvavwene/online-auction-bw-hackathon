"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const buildSchema_1 = __importDefault(require("../mongoose/buildSchema"));
const buildQuery_1 = __importDefault(require("../mongoose/buildQuery"));
const buildModel = (config) => {
    if (config.globals && config.globals.length > 0) {
        const globalsSchema = new mongoose_1.default.Schema({}, { discriminatorKey: 'globalType', timestamps: true });
        globalsSchema.plugin(buildQuery_1.default);
        const Globals = mongoose_1.default.model('globals', globalsSchema);
        Object.values(config.globals).forEach((globalConfig) => {
            const globalSchema = (0, buildSchema_1.default)(config, globalConfig.fields, { global: true });
            Globals.discriminator(globalConfig.slug, globalSchema);
        });
        return Globals;
    }
    return null;
};
exports.default = buildModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nbG9iYWxzL2J1aWxkTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsMEVBQWtEO0FBRWxELHdFQUFzRDtBQUd0RCxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQXVCLEVBQXNCLEVBQUU7SUFDakUsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVwRyxhQUFhLENBQUMsTUFBTSxDQUFDLG9CQUFnQixDQUFDLENBQUM7UUFFdkMsTUFBTSxPQUFPLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBZ0IsQ0FBQztRQUV4RSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyRCxNQUFNLFlBQVksR0FBRyxJQUFBLHFCQUFXLEVBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoRixPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIn0=