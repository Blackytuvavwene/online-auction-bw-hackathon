"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatLabels_1 = require("../../utilities/formatLabels");
const errors_1 = require("../../errors");
const baseBlockFields_1 = require("../baseFields/baseBlockFields");
const validations_1 = __importDefault(require("../validations"));
const baseIDField_1 = require("../baseFields/baseIDField");
const types_1 = require("./types");
const withCondition_1 = __importDefault(require("../../admin/components/forms/withCondition"));
const sanitizeFields = (fields, validRelationships) => {
    if (!fields)
        return [];
    return fields.map((unsanitizedField) => {
        var _a, _b;
        const field = { ...unsanitizedField };
        if (!field.type)
            throw new errors_1.MissingFieldType(field);
        // assert that field names do not contain forbidden characters
        if ('name' in field && field.name && field.name.includes('.')) {
            throw new errors_1.InvalidFieldName(field, field.name);
        }
        // Auto-label
        if ('name' in field && field.name && typeof field.label !== 'string' && field.label !== false) {
            field.label = (0, formatLabels_1.toWords)(field.name);
        }
        if (field.type === 'checkbox' && typeof field.defaultValue === 'undefined' && field.required === true) {
            field.defaultValue = false;
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            const relationships = Array.isArray(field.relationTo) ? field.relationTo : [field.relationTo];
            relationships.forEach((relationship) => {
                if (!validRelationships.includes(relationship)) {
                    throw new errors_1.InvalidFieldRelationship(field, relationship);
                }
            });
        }
        if (field.type === 'blocks' && field.blocks) {
            field.blocks = field.blocks.map((block) => ({ ...block, fields: block.fields.concat(baseBlockFields_1.baseBlockFields) }));
        }
        if (field.type === 'array' && field.fields) {
            field.fields.push(baseIDField_1.baseIDField);
        }
        if ((field.type === 'blocks' || field.type === 'array') && field.label !== false) {
            field.labels = field.labels || (0, formatLabels_1.formatLabels)(field.name);
        }
        if ((0, types_1.fieldAffectsData)(field)) {
            if (typeof field.validate === 'undefined') {
                const defaultValidate = validations_1.default[field.type];
                if (defaultValidate) {
                    field.validate = (val, options) => defaultValidate(val, { ...field, ...options });
                }
                else {
                    field.validate = () => true;
                }
            }
            if (!field.hooks)
                field.hooks = {};
            if (!field.access)
                field.access = {};
        }
        if (field.admin) {
            if (field.admin.condition && ((_a = field.admin.components) === null || _a === void 0 ? void 0 : _a.Field)) {
                field.admin.components.Field = (0, withCondition_1.default)((_b = field.admin.components) === null || _b === void 0 ? void 0 : _b.Field);
            }
        }
        else {
            field.admin = {};
        }
        if ('fields' in field && field.fields)
            field.fields = sanitizeFields(field.fields, validRelationships);
        if (field.type === 'tabs') {
            field.tabs = field.tabs.map((tab) => {
                const unsanitizedTab = { ...tab };
                unsanitizedTab.fields = sanitizeFields(tab.fields, validRelationships);
                return unsanitizedTab;
            });
        }
        if ('blocks' in field && field.blocks) {
            field.blocks = field.blocks.map((block) => {
                const unsanitizedBlock = { ...block };
                unsanitizedBlock.labels = !unsanitizedBlock.labels ? (0, formatLabels_1.formatLabels)(unsanitizedBlock.slug) : unsanitizedBlock.labels;
                unsanitizedBlock.fields = sanitizeFields(block.fields, validRelationships);
                return unsanitizedBlock;
            });
        }
        return field;
    });
};
exports.default = sanitizeFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmllbGRzL2NvbmZpZy9zYW5pdGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUFxRTtBQUNyRSx5Q0FBNEY7QUFDNUYsbUVBQWdFO0FBQ2hFLGlFQUF5QztBQUN6QywyREFBd0Q7QUFDeEQsbUNBQWtEO0FBQ2xELCtGQUF1RTtBQUV2RSxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQWUsRUFBRSxrQkFBNEIsRUFBVyxFQUFFO0lBQ2hGLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFFdkIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTs7UUFDckMsTUFBTSxLQUFLLEdBQVUsRUFBRSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQUUsTUFBTSxJQUFJLHlCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELDhEQUE4RDtRQUM5RCxJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3RCxNQUFNLElBQUkseUJBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQztRQUVELGFBQWE7UUFDYixJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQzdGLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBQSxzQkFBTyxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxVQUFV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