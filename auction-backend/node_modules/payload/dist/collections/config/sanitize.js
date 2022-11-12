"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const is_plain_object_1 = require("is-plain-object");
const sanitize_1 = __importDefault(require("../../fields/config/sanitize"));
const toKebabCase_1 = __importDefault(require("../../utilities/toKebabCase"));
const auth_1 = __importDefault(require("../../auth/baseFields/auth"));
const apiKey_1 = __importDefault(require("../../auth/baseFields/apiKey"));
const verification_1 = __importDefault(require("../../auth/baseFields/verification"));
const accountLock_1 = __importDefault(require("../../auth/baseFields/accountLock"));
const getBaseFields_1 = __importDefault(require("../../uploads/getBaseFields"));
const formatLabels_1 = require("../../utilities/formatLabels");
const defaults_1 = require("./defaults");
const defaults_2 = require("../../versions/defaults");
const baseFields_1 = __importDefault(require("../../versions/baseFields"));
const TimestampsRequired_1 = __importDefault(require("../../errors/TimestampsRequired"));
const mergeBaseFields_1 = __importDefault(require("../../fields/mergeBaseFields"));
const sanitizeCollection = (config, collection) => {
    // /////////////////////////////////
    // Make copy of collection config
    // /////////////////////////////////
    const sanitized = (0, deepmerge_1.default)(defaults_1.defaults, collection, {
        isMergeableObject: is_plain_object_1.isPlainObject,
    });
    sanitized.slug = (0, toKebabCase_1.default)(sanitized.slug);
    sanitized.labels = sanitized.labels || (0, formatLabels_1.formatLabels)(sanitized.slug);
    if (sanitized.versions) {
        if (sanitized.versions === true)
            sanitized.versions = { drafts: false };
        if (sanitized.timestamps === false) {
            throw new TimestampsRequired_1.default(collection);
        }
        if (sanitized.versions.drafts) {
            if (sanitized.versions.drafts === true) {
                sanitized.versions.drafts = {
                    autosave: false,
                };
            }
            if (sanitized.versions.drafts.autosave === true)
                sanitized.versions.drafts.autosave = {};
            sanitized.fields = (0, mergeBaseFields_1.default)(sanitized.fields, baseFields_1.default);
        }
        sanitized.versions = (0, deepmerge_1.default)(defaults_2.versionCollectionDefaults, sanitized.versions);
    }
    if (sanitized.upload) {
        if (sanitized.upload === true)
            sanitized.upload = {};
        sanitized.upload.staticDir = sanitized.upload.staticDir || sanitized.slug;
        sanitized.upload.staticURL = sanitized.upload.staticURL || `/${sanitized.slug}`;
        sanitized.admin.useAsTitle = (sanitized.admin.useAsTitle && sanitized.admin.useAsTitle !== 'id') ? sanitized.admin.useAsTitle : 'filename';
        const uploadFields = (0, getBaseFields_1.default)({
            config,
            collection: sanitized,
        });
        sanitized.fields = (0, mergeBaseFields_1.default)(sanitized.fields, uploadFields);
    }
    if (sanitized.auth) {
        sanitized.auth = (0, deepmerge_1.default)(defaults_1.authDefaults, typeof sanitized.auth === 'object' ? sanitized.auth : {}, {
            isMergeableObject: is_plain_object_1.isPlainObject,
        });
        let authFields = [];
        if (sanitized.auth.useAPIKey) {
            authFields = authFields.concat(apiKey_1.default);
        }
        if (!sanitized.auth.disableLocalStrategy) {
            authFields = authFields.concat(auth_1.default);
            if (sanitized.auth.verify) {
                if (sanitized.auth.verify === true)
                    sanitized.auth.verify = {};
                authFields = authFields.concat(verification_1.default);
            }
            if (sanitized.auth.maxLoginAttempts > 0) {
                authFields = authFields.concat(accountLock_1.default);
            }
        }
        sanitized.fields = (0, mergeBaseFields_1.default)(sanitized.fields, authFields);
    }
    // /////////////////////////////////
    // Sanitize fields
    // /////////////////////////////////
    const validRelationships = config.collections.map((c) => c.slug);
    sanitized.fields = (0, sanitize_1.default)(sanitized.fields, validRelationships);
    return sanitized;
};
exports.default = sanitizeCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29sbGVjdGlvbnMvY29uZmlnL3Nhbml0aXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQThCO0FBQzlCLHFEQUFnRDtBQUVoRCw0RUFBMEQ7QUFDMUQsOEVBQXNEO0FBQ3RELHNFQUF3RDtBQUN4RCwwRUFBNEQ7QUFDNUQsc0ZBQXdFO0FBQ3hFLG9GQUFzRTtBQUN0RSxnRkFBOEQ7QUFDOUQsK0RBQTREO0FBQzVELHlDQUFvRDtBQUVwRCxzREFBb0U7QUFDcEUsMkVBQTBEO0FBQzFELHlGQUFpRTtBQUNqRSxtRkFBMkQ7QUFFM0QsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE1BQWMsRUFBRSxVQUE0QixFQUE2QixFQUFFO0lBQ3JHLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBRXBDLE1BQU0sU0FBUyxHQUFxQixJQUFBLG1CQUFLLEVBQUMsbUJBQVEsRUFBRSxVQUFVLEVBQUU7UUFDOUQsaUJBQWlCLEVBQUUsK0JBQWE7S0FDakMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFBLHFCQUFXLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sSUFBSSxJQUFBLDJCQUFZLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBFLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtRQUN0QixJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSTtZQUFFLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFFeEUsSUFBSSxTQUFTLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZQUNsQyxNQUFNLElBQUksNEJBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLFNB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