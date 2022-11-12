"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const formatLabels_1 = require("../../utilities/formatLabels");
const sanitize_1 = __importDefault(require("../../fields/config/sanitize"));
const defaultAccess_1 = __importDefault(require("../../auth/defaultAccess"));
const baseFields_1 = __importDefault(require("../../versions/baseFields"));
const mergeBaseFields_1 = __importDefault(require("../../fields/mergeBaseFields"));
const defaults_1 = require("../../versions/defaults");
const sanitizeGlobals = (collections, globals) => {
    const sanitizedGlobals = globals.map((global) => {
        const sanitizedGlobal = { ...global };
        sanitizedGlobal.label = sanitizedGlobal.label || (0, formatLabels_1.toWords)(sanitizedGlobal.slug);
        // /////////////////////////////////
        // Ensure that collection has required object structure
        // /////////////////////////////////
        if (!sanitizedGlobal.hooks)
            sanitizedGlobal.hooks = {};
        if (!sanitizedGlobal.endpoints)
            sanitizedGlobal.endpoints = [];
        if (!sanitizedGlobal.access)
            sanitizedGlobal.access = {};
        if (!sanitizedGlobal.admin)
            sanitizedGlobal.admin = {};
        if (!sanitizedGlobal.access.read)
            sanitizedGlobal.access.read = defaultAccess_1.default;
        if (!sanitizedGlobal.access.update)
            sanitizedGlobal.access.update = defaultAccess_1.default;
        if (!sanitizedGlobal.hooks.beforeValidate)
            sanitizedGlobal.hooks.beforeValidate = [];
        if (!sanitizedGlobal.hooks.beforeChange)
            sanitizedGlobal.hooks.beforeChange = [];
        if (!sanitizedGlobal.hooks.afterChange)
            sanitizedGlobal.hooks.afterChange = [];
        if (!sanitizedGlobal.hooks.beforeRead)
            sanitizedGlobal.hooks.beforeRead = [];
        if (!sanitizedGlobal.hooks.afterRead)
            sanitizedGlobal.hooks.afterRead = [];
        if (sanitizedGlobal.versions) {
            if (sanitizedGlobal.versions === true)
                sanitizedGlobal.versions = { drafts: false };
            if (sanitizedGlobal.versions.drafts) {
                if (sanitizedGlobal.versions.drafts === true) {
                    sanitizedGlobal.versions.drafts = {
                        autosave: false,
                    };
                }
                if (sanitizedGlobal.versions.drafts.autosave === true)
                    sanitizedGlobal.versions.drafts.autosave = {};
                sanitizedGlobal.fields = (0, mergeBaseFields_1.default)(sanitizedGlobal.fields, baseFields_1.default);
            }
            sanitizedGlobal.versions = (0, deepmerge_1.default)(defaults_1.versionGlobalDefaults, sanitizedGlobal.versions);
        }
        // /////////////////////////////////
        // Sanitize fields
        // /////////////////////////////////
        const validRelationships = collections.map((c) => c.slug);
        sanitizedGlobal.fields = (0, sanitize_1.default)(sanitizedGlobal.fields, validRelationships);
        return sanitizedGlobal;
    });
    return sanitizedGlobals;
};
exports.default = sanitizeGlobals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ2xvYmFscy9jb25maWcvc2FuaXRpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBOEI7QUFDOUIsK0RBQXVEO0FBRXZELDRFQUEwRDtBQUUxRCw2RUFBcUQ7QUFDckQsMkVBQTBEO0FBQzFELG1GQUEyRDtBQUMzRCxzREFBZ0U7QUFFaEUsTUFBTSxlQUFlLEdBQUcsQ0FBQyxXQUErQixFQUFFLE9BQXVCLEVBQTJCLEVBQUU7SUFDNUcsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDOUMsTUFBTSxlQUFlLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBRXRDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLEtBQUssSUFBSSxJQUFBLHNCQUFPLEVBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9FLG9DQUFvQztRQUNwQyx1REFBdUQ7UUFDdkQsb0NBQW9DO1FBRXBDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztZQUFFLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUztZQUFFLGVBQWUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTTtZQUFFLGVBQWUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztZQUFFLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRXZELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUk7WUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyx1QkFBYSxDQUFDO1FBQzlFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU07WUFBRSxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDO1FBRWxGLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQWM7WUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDckYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUNqRixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUUzRSxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxlQUFlLENBQUMsUUFBUSxLQUFLLElBQUk7Z0JBQUUsZUFBZSxDQUFDLFFBQVEsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUVwRixJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDNUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUc7d0JBQ2hDLFFBQVEsRUFBRSxLQUFLO3FCQUNoQixDQUFDO2lCQUNIO2dCQUVELElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUk7b0JBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFFckcsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFBLHlCQUFlLEVBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxvQkFBaUIsQ0FBQyxDQUFDO2FBQ3JGO1lBRUQsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFBLG1CQUFLLEVBQUMsZ0NBQXFCLEVBQUUsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixvQ0FBb0M7UUFFcEMsTUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFBLGtCQUFjLEVBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXBGLE9BQU8sZUFBd0MsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBZSxDQUFDIn0=