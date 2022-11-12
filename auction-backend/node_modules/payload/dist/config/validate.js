"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = __importDefault(require("./schema"));
const schema_2 = __importDefault(require("../collections/config/schema"));
const schema_3 = __importStar(require("../fields/config/schema"));
const schema_4 = __importDefault(require("../globals/config/schema"));
const types_1 = require("../fields/config/types");
const validateFields = (context, entity) => {
    const errors = [];
    entity.fields.forEach((field) => {
        let idResult = { error: null };
        if ((0, types_1.fieldAffectsData)(field) && field.name === 'id') {
            idResult = schema_3.idField.validate(field, { abortEarly: false });
        }
        const result = schema_3.default.validate(field, { abortEarly: false });
        if (idResult.error) {
            idResult.error.details.forEach(({ message }) => {
                errors.push(`${context} "${entity.slug}" > Field${(0, types_1.fieldAffectsData)(field) ? ` "${field.name}" >` : ''} ${message}`);
            });
        }
        if (result.error) {
            result.error.details.forEach(({ message }) => {
                errors.push(`${context} "${entity.slug}" > Field${(0, types_1.fieldAffectsData)(field) ? ` "${field.name}" >` : ''} ${message}`);
            });
        }
    });
    return errors;
};
const validateCollections = (collections) => {
    const errors = [];
    collections.forEach((collection) => {
        const result = schema_2.default.validate(collection, { abortEarly: false });
        if (result.error) {
            result.error.details.forEach(({ message }) => {
                errors.push(`Collection "${collection.slug}" > ${message}`);
            });
        }
        errors.push(...validateFields('Collection', collection));
    });
    return errors;
};
const validateGlobals = (globals) => {
    const errors = [];
    globals.forEach((global) => {
        const result = schema_4.default.validate(global, { abortEarly: false });
        if (result.error) {
            result.error.details.forEach(({ message }) => {
                errors.push(`Globals "${global.slug}" > ${message}`);
            });
        }
        errors.push(...validateFields('Global', global));
    });
    return errors;
};
const validateSchema = (config, logger) => {
    var _a, _b;
    const result = schema_1.default.validate(config, {
        abortEarly: false,
    });
    const nestedErrors = [
        ...validateCollections(config.collections),
        ...validateGlobals(config.globals),
    ];
    if (result.error || nestedErrors.length > 0) {
        logger.error(`There were ${(((_b = (_a = result.error) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.length) || 0) + nestedErrors.length} errors validating your Payload config`);
        let i = 0;
        if (result.error) {
            result.error.details.forEach(({ message }) => {
                i += 1;
                logger.error(`${i}: ${message}`);
            });
        }
        nestedErrors.forEach((message) => {
            i += 1;
            logger.error(`${i}: ${message}`);
        });
        process.exit(1);
    }
    return result.value;
};
exports.default = validateSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL3ZhbGlkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxzREFBOEI7QUFDOUIsMEVBQTREO0FBRzVELGtFQUErRDtBQUUvRCxzRUFBb0Q7QUFDcEQsa0RBQTBEO0FBRTFELE1BQU0sY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFFLE1BQXlELEVBQVksRUFBRTtJQUM5RyxNQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM5QixJQUFJLFFBQVEsR0FBOEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDMUQsSUFBSSxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ2xELFFBQVEsR0FBRyxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUVELE1BQU0sTUFBTSxHQUFHLGdCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQixRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLEtBQUssTUFBTSxDQUFDLElBQUksWUFBWSxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFB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