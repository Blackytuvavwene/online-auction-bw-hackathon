"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recurseNestedFields = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
const types_1 = require("../config/types");
const populate_1 = require("./populate");
const richTextRelationshipPromise_1 = require("./richTextRelationshipPromise");
const recurseNestedFields = ({ promises, data, fields, req, overrideAccess = false, depth, currentDepth = 0, showHiddenFields, }) => {
    fields.forEach((field) => {
        var _a, _b;
        if (field.type === 'relationship' || field.type === 'upload') {
            if (field.type === 'relationship') {
                if (field.hasMany && Array.isArray(data[field.name])) {
                    if (Array.isArray(field.relationTo)) {
                        data[field.name].forEach(({ relationTo, value }, i) => {
                            const collection = req.payload.collections[relationTo];
                            if (collection) {
                                promises.push((0, populate_1.populate)({
                                    id: value,
                                    field,
                                    collection,
                                    data: data[field.name],
                                    key: i,
                                    overrideAccess,
                                    depth,
                                    currentDepth,
                                    req,
                                    showHiddenFields,
                                }));
                            }
                        });
                    }
                    else {
                        data[field.name].forEach((id, i) => {
                            const collection = req.payload.collections[field.relationTo];
                            if (collection) {
                                promises.push((0, populate_1.populate)({
                                    id,
                                    field,
                                    collection,
                                    data: data[field.name],
                                    key: i,
                                    overrideAccess,
                                    depth,
                                    currentDepth,
                                    req,
                                    showHiddenFields,
                                }));
                            }
                        });
                    }
                }
                else if (Array.isArray(field.relationTo) && ((_a = data[field.name]) === null || _a === void 0 ? void 0 : _a.value) && ((_b = data[field.name]) === null || _b === void 0 ? void 0 : _b.relationTo)) {
                    const collection = req.payload.collections[data[field.name].relationTo];
                    promises.push((0, populate_1.populate)({
                        id: data[field.name].value,
                        field,
                        collection,
                        data: data[field.name],
                        key: 'value',
                        overrideAccess,
                        depth,
                        currentDepth,
                        req,
                        showHiddenFields,
                    }));
                }
            }
            if (typeof data[field.name] !== 'undefined' && typeof field.relationTo === 'string') {
                const collection = req.payload.collections[field.relationTo];
                promises.push((0, populate_1.populate)({
                    id: data[field.name],
                    field,
                    collection,
                    data,
                    key: field.name,
                    overrideAccess,
                    depth,
                    currentDepth,
                    req,
                    showHiddenFields,
                }));
            }
        }
        else if ((0, types_1.fieldHasSubFields)(field) && !(0, types_1.fieldIsArrayType)(field)) {
            if ((0, types_1.fieldAffectsData)(field) && typeof data[field.name] === 'object') {
                (0, exports.recurseNestedFields)({
                    promises,
                    data: data[field.name],
                    fields: field.fields,
                    req,
                    overrideAccess,
                    depth,
                    currentDepth,
                    showHiddenFields,
                });
            }
            else {
                (0, exports.recurseNestedFields)({
                    promises,
                    data,
                    fields: field.fields,
                    req,
                    overrideAccess,
                    depth,
                    currentDepth,
                    showHiddenFields,
                });
            }
        }
        else if (field.type === 'tabs') {
            field.tabs.forEach((tab) => {
                (0, exports.recurseNestedFields)({
                    promises,
                    data,
                    fields: tab.fields,
                    req,
                    overrideAccess,
                    depth,
                    currentDepth,
                    showHiddenFields,
                });
            });
        }
        else if (Array.isArray(data[field.name])) {
            if (field.type === 'blocks') {
                data[field.name].forEach((row, i) => {
                    const block = field.blocks.find(({ slug }) => slug === (row === null || row === void 0 ? void 0 : row.blockType));
                    if (block) {
                        (0, exports.recurseNestedFields)({
                            promises,
                            data: data[field.name][i],
                            fields: block.fields,
                            req,
                            overrideAccess,
                            depth,
                            currentDepth,
                            showHiddenFields,
                        });
                    }
                });
            }
            if (field.type === 'array') {
                data[field.name].forEach((_, i) => {
                    (0, exports.recurseNestedFields)({
                        promises,
                        data: data[field.name][i],
                        fields: field.fields,
                        req,
                        overrideAccess,
                        depth,
                        currentDepth,
                        showHiddenFields,
                    });
                });
            }
        }
        if (field.type === 'richText' && Array.isArray(data[field.name])) {
            data[field.name].forEach((node) => {
                if (Array.isArray(node.children)) {
                    (0, richTextRelationshipPromise_1.recurseRichText)({
                        req,
                        children: node.children,
                        overrideAccess,
                        depth,
                        currentDepth,
                        field,
                        promises,
                        showHiddenFields,
                    });
                }
            });
        }
    });
};
exports.recurseNestedFields = recurseNestedFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdXJzZU5lc3RlZEZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvcmljaFRleHQvcmVjdXJzZU5lc3RlZEZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0REFBNEQ7QUFDNUQsMkNBQStGO0FBRS9GLHlDQUFzQztBQUN0QywrRUFBZ0U7QUFhekQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEVBQ2xDLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLEdBQUcsRUFDSCxjQUFjLEdBQUcsS0FBSyxFQUN0QixLQUFLLEVBQ0wsWUFBWSxHQUFHLENBQUMsRUFDaEIsZ0JBQWdCLEdBQ1MsRUFBUSxFQUFFO0lBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7UUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssY0FBYyxFQUFFO2dCQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3BELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN2RCxJQUFJLFVBQVUsRUFBRTtnQ0FDZCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUEsbUJBQVEsRUFBQztvQ0FDckIs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