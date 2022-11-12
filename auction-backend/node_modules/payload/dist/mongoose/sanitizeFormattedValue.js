"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeQueryValue = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const createArrayFromCommaDelineated_1 = require("./createArrayFromCommaDelineated");
const getSchemaTypeOptions_1 = require("./getSchemaTypeOptions");
const wordBoundariesRegex_1 = __importDefault(require("../utilities/wordBoundariesRegex"));
const sanitizeQueryValue = (schemaType, path, operator, val) => {
    let formattedValue = val;
    const schemaOptions = (0, getSchemaTypeOptions_1.getSchemaTypeOptions)(schemaType);
    // Disregard invalid _ids
    if (path === '_id' && typeof val === 'string' && val.split(',').length === 1) {
        if ((schemaType === null || schemaType === void 0 ? void 0 : schemaType.instance) === 'ObjectID') {
            const isValid = mongoose_1.default.Types.ObjectId.isValid(val);
            if (!isValid) {
                return undefined;
            }
        }
        if ((schemaType === null || schemaType === void 0 ? void 0 : schemaType.instance) === 'Number') {
            const parsedNumber = parseFloat(val);
            if (Number.isNaN(parsedNumber)) {
                return undefined;
            }
        }
    }
    // Cast incoming values as proper searchable types
    if ((schemaType === null || schemaType === void 0 ? void 0 : schemaType.instance) === 'Boolean' && typeof val === 'string') {
        if (val.toLowerCase() === 'true')
            formattedValue = true;
        if (val.toLowerCase() === 'false')
            formattedValue = false;
    }
    if ((schemaType === null || schemaType === void 0 ? void 0 : schemaType.instance) === 'Number' && typeof val === 'string') {
        formattedValue = Number(val);
    }
    if (((schemaOptions === null || schemaOptions === void 0 ? void 0 : schemaOptions.ref) || (schemaOptions === null || schemaOptions === void 0 ? void 0 : schemaOptions.refPath)) && val === 'null') {
        formattedValue = null;
    }
    // Set up specific formatting necessary by operators
    if (operator === 'near') {
        let lng;
        let lat;
        let maxDistance;
        let minDistance;
        if (Array.isArray(formattedValue)) {
            [lng, lat, maxDistance, minDistance] = formattedValue;
        }
        if (typeof formattedValue === 'string') {
            [lng, lat, maxDistance, minDistance] = (0, createArrayFromCommaDelineated_1.createArrayFromCommaDelineated)(formattedValue);
        }
        if (!lng || !lat || (!maxDistance && !minDistance)) {
            formattedValue = undefined;
        }
        else {
            formattedValue = {
                $geometry: { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
            };
            if (maxDistance)
                formattedValue.$maxDistance = parseFloat(maxDistance);
            if (minDistance)
                formattedValue.$minDistance = parseFloat(minDistance);
        }
    }
    if (['all', 'not_in', 'in'].includes(operator) && typeof formattedValue === 'string') {
        formattedValue = (0, createArrayFromCommaDelineated_1.createArrayFromCommaDelineated)(formattedValue);
    }
    if (schemaOptions && (schemaOptions.ref || schemaOptions.refPath) && operator === 'in') {
        if (Array.isArray(formattedValue)) {
            formattedValue = formattedValue.reduce((formattedValues, inVal) => {
                const newValues = [inVal];
                if (mongoose_1.default.Types.ObjectId.isValid(inVal))
                    newValues.push(new mongoose_1.default.Types.ObjectId(inVal));
                const parsedNumber = parseFloat(inVal);
                if (!Number.isNaN(parsedNumber))
                    newValues.push(parsedNumber);
                return [
                    ...formattedValues,
                    ...newValues,
                ];
            }, []);
        }
    }
    if (path !== '_id') {
        if (operator === 'contains') {
            formattedValue = { $regex: formattedValue, $options: 'i' };
        }
        if (operator === 'like' && typeof formattedValue === 'string') {
            const $regex = (0, wordBoundariesRegex_1.default)(formattedValue);
            formattedValue = { $regex };
        }
    }
    if (operator === 'exists') {
        formattedValue = (formattedValue === 'true' || formattedValue === true);
    }
    return formattedValue;
};
exports.sanitizeQueryValue = sanitizeQueryValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVGb3JtYXR0ZWRWYWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb25nb29zZS9zYW5pdGl6ZUZvcm1hdHRlZFZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUFnRDtBQUNoRCxxRkFBa0Y7QUFDbEYsaUVBQThEO0FBQzlELDJGQUFtRTtBQUU1RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsVUFBc0IsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxHQUFRLEVBQVcsRUFBRTtJQUM5RyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUM7SUFDekIsTUFBTSxhQUFhLEdBQUcsSUFBQSwyQ0FBb0IsRUFBQyxVQUFVLENBQUMsQ0FBQztJQUV2RCx5QkFBeUI7SUFFekIsSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDNUUsSUFBSSxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLE1BQUssVUFBVSxFQUFFO1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixPQUFPLFNBQVMsQ0FBQzthQUNsQjtTQUNGO1FBRUQsSUFBSSxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLE1BQUssUUFBUSxFQUFFO1lBQ3JDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1NBQ0Y7S0FDRjtJQUVELGtEQUFrRDtJQUVs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