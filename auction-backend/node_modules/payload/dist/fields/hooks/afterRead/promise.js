"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
/* eslint-disable no-param-reassign */
const types_1 = require("../../config/types");
const traverseFields_1 = require("./traverseFields");
const richTextRelationshipPromise_1 = __importDefault(require("../../richText/richTextRelationshipPromise"));
const relationshipPopulationPromise_1 = __importDefault(require("./relationshipPopulationPromise"));
// This function is responsible for the following actions, in order:
// - Remove hidden fields from response
// - Flatten locales into requested locale
// - Sanitize outgoing data (point field, etc)
// - Execute field hooks
// - Execute read access control
// - Populate relationships
const promise = async ({ currentDepth, depth, doc, field, fieldPromises, findMany, flattenLocales, overrideAccess, populationPromises, req, siblingDoc, showHiddenFields, }) => {
    var _a, _b, _c, _d, _e, _f;
    if ((0, types_1.fieldAffectsData)(field) && field.hidden && typeof siblingDoc[field.name] !== 'undefined' && !showHiddenFields) {
        delete siblingDoc[field.name];
    }
    const hasLocalizedValue = flattenLocales
        && (0, types_1.fieldAffectsData)(field)
        && (typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null)
        && field.localized
        && req.locale !== 'all';
    if (hasLocalizedValue) {
        let localizedValue = siblingDoc[field.name][req.locale];
        if (typeof localizedValue === 'undefined' && req.fallbackLocale)
            localizedValue = siblingDoc[field.name][req.fallbackLocale];
        if (typeof localizedValue === 'undefined' && (field.type === 'group' || field.type === 'tab'))
            localizedValue = {};
        if (typeof localizedValue === 'undefined')
            localizedValue = null;
        siblingDoc[field.name] = localizedValue;
    }
    // Sanitize outgoing data
    switch (field.type) {
        case 'group': {
            // Fill groups with empty objects so fields with hooks within groups can populate
            // themselves virtually as necessary
            if (typeof siblingDoc[field.name] === 'undefined') {
                siblingDoc[field.name] = {};
            }
            break;
        }
        case 'tabs': {
            field.tabs.forEach((tab) => {
                if ((0, types_1.tabHasName)(tab) && typeof siblingDoc[tab.name] === 'undefined') {
                    siblingDoc[tab.name] = {};
                }
            });
            break;
        }
        case 'richText': {
            if (((((_b = (_a = field.admin) === null || _a === void 0 ? void 0 : _a.elements) === null || _b === void 0 ? void 0 : _b.includes('relationship')) || ((_d = (_c = field.admin) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.includes('upload'))) || !((_e = field === null || field === void 0 ? void 0 : field.admin) === null || _e === void 0 ? void 0 : _e.elements))) {
                populationPromises.push((0, richTextRelationshipPromise_1.default)({
                    currentDepth,
                    depth,
                    field,
                    overrideAccess,
                    req,
                    siblingDoc,
                    showHiddenFields,
                }));
            }
            break;
        }
        case 'point': {
            const pointDoc = siblingDoc[field.name];
            if (Array.isArray(pointDoc === null || pointDoc === void 0 ? void 0 : pointDoc.coordinates) && pointDoc.coordinates.length === 2) {
                siblingDoc[field.name] = pointDoc.coordinates;
            }
            break;
        }
        default: {
            break;
        }
    }
    if ((0, types_1.fieldAffectsData)(field)) {
        // Execute hooks
        if ((_f = field.hooks) === null || _f === void 0 ? void 0 : _f.afterRead) {
            await field.hooks.afterRead.reduce(async (priorHook, currentHook) => {
                await priorHook;
                const shouldRunHookOnAllLocales = field.localized
                    && (req.locale === 'all' || !flattenLocales)
                    && typeof siblingDoc[field.name] === 'object';
                if (shouldRunHookOnAllLocales) {
                    const hookPromises = Object.entries(siblingDoc[field.name]).map(([locale, value]) => (async () => {
                        const hookedValue = await currentHook({
                            value,
                            originalDoc: doc,
                            data: doc,
                            siblingData: siblingDoc,
                            operation: 'read',
                            req,
                        });
                        if (hookedValue !== undefined) {
                            siblingDoc[field.name][locale] = hookedValue;
                        }
                    })());
                    await Promise.all(hookPromises);
                }
                else {
                    const hookedValue = await currentHook({
                        data: doc,
                        findMany,
                        originalDoc: doc,
                        operation: 'read',
                        siblingData: siblingDoc,
                        req,
                        value: siblingDoc[field.name],
                    });
                    if (hookedValue !== undefined) {
                        siblingDoc[field.name] = hookedValue;
                    }
                }
            }, Promise.resolve());
        }
        // Execute access control
        if (field.access && field.access.read) {
            const result = overrideAccess ? true : await field.access.read({ req, id: doc.id, siblingData: siblingDoc, data: doc, doc });
            if (!result) {
                delete siblingDoc[field.name];
            }
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            populationPromises.push((0, relationshipPopulationPromise_1.default)({
                currentDepth,
                depth,
                field,
                overrideAccess,
                req,
                showHiddenFields,
                siblingDoc,
            }));
        }
    }
    switch (field.type) {
        case 'group': {
            let groupDoc = siblingDoc[field.name];
            if (typeof siblingDoc[field.name] !== 'object')
                groupDoc = {};
            (0, traverseFields_1.traverseFields)({
                currentDepth,
                depth,
                doc,
                fieldPromises,
                fields: field.fields,
                findMany,
                flattenLocales,
                overrideAccess,
                populationPromises,
                req,
                siblingDoc: groupDoc,
                showHiddenFields,
            });
            break;
        }
        case 'array': {
            const rows = siblingDoc[field.name];
            if (Array.isArray(rows)) {
                rows.forEach((row) => {
                    (0, traverseFields_1.traverseFields)({
                        currentDepth,
                        depth,
                        doc,
                        fields: field.fields,
                        fieldPromises,
                        findMany,
                        flattenLocales,
                        overrideAccess,
                        populationPromises,
                        req,
                        siblingDoc: row || {},
                        showHiddenFields,
                    });
                });
            }
            break;
        }
        case 'blocks': {
            const rows = siblingDoc[field.name];
            if (Array.isArray(rows)) {
                rows.forEach((row) => {
                    const block = field.blocks.find((blockType) => blockType.slug === row.blockType);
                    if (block) {
                        (0, traverseFields_1.traverseFields)({
                            currentDepth,
                            depth,
                            doc,
                            fields: block.fields,
                            fieldPromises,
                            findMany,
                            flattenLocales,
                            overrideAccess,
                            populationPromises,
                            req,
                            siblingDoc: row || {},
                            showHiddenFields,
                        });
                    }
                });
            }
            break;
        }
        case 'row':
        case 'collapsible': {
            (0, traverseFields_1.traverseFields)({
                currentDepth,
                depth,
                doc,
                fieldPromises,
                fields: field.fields,
                findMany,
                flattenLocales,
                overrideAccess,
                populationPromises,
                req,
                siblingDoc,
                showHiddenFields,
            });
            break;
        }
        case 'tab': {
            let tabDoc = siblingDoc;
            if ((0, types_1.tabHasName)(field)) {
                tabDoc = siblingDoc[field.name];
                if (typeof siblingDoc[field.name] !== 'object')
                    tabDoc = {};
            }
            await (0, traverseFields_1.traverseFields)({
                currentDepth,
                depth,
                doc,
                fieldPromises,
                fields: field.fields,
                findMany,
                flattenLocales,
                overrideAccess,
                populationPromises,
                req,
                siblingDoc: tabDoc,
                showHiddenFields,
            });
            break;
        }
        case 'tabs': {
            (0, traverseFields_1.traverseFields)({
                currentDepth,
                depth,
                doc,
                fieldPromises,
                fields: field.tabs.map((tab) => ({ ...tab, type: 'tab' })),
                findMany,
                flattenLocales,
                overrideAccess,
                populationPromises,
                req,
                siblingDoc,
                showHiddenFields,
            });
            break;
        }
        default: {
            break;
        }
    }
};
exports.promise = promise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLDhDQUFxRjtBQUVyRixxREFBa0Q7QUFDbEQsNkdBQXFGO0FBQ3JGLG9HQUE0RTtBQWlCNUUsb0VBQW9FO0FBQ3BFLHVDQUF1QztBQUN2QywwQ0FBMEM7QUFDMUMsOENBQThDO0FBQzlDLHdCQUF3QjtBQUN4QixnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBRXBCLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxFQUM1QixZQUFZLEVBQ1osS0FBSyxFQUNMLEdBQUcsRUFDSCxLQUFLLEVBQ0wsYUFBYSxFQUNiLFFBQVEsRUFDUixjQUFjLEVBQ2QsY0FBYyxFQUNkLGtCQUFrQixFQUNsQixHQUFHLEVBQ0gsVUFBVSxFQUNWLGdCQUFnQixHQUNYLEVBQWlCLEVBQUU7O0lBQ3hCLElBQUksSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtRQUNqSCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0I7SUFFRCxNQUFNLGlCQUFpQixHQUFHLGNBQWM7V0FDbkMsSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUM7V0FDdkIsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO1dBQy9FLEtBQUssQ0FBQyxTQUFTO1dBQ2YsR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUM7SUFFMUIsSUFBSSxpQkFBaUIsRUFBRTtR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