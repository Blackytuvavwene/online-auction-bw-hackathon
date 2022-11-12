"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recurseRichText = void 0;
const recurseNestedFields_1 = require("./recurseNestedFields");
const populate_1 = require("./populate");
const recurseRichText = ({ req, children, overrideAccess = false, depth, currentDepth = 0, field, promises, showHiddenFields, }) => {
    if (Array.isArray(children)) {
        children.forEach((element) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if ((depth && currentDepth <= depth)) {
                if ((element.type === 'relationship' || element.type === 'upload')
                    && ((_a = element === null || element === void 0 ? void 0 : element.value) === null || _a === void 0 ? void 0 : _a.id)) {
                    const collection = req.payload.collections[element === null || element === void 0 ? void 0 : element.relationTo];
                    if (collection) {
                        promises.push((0, populate_1.populate)({
                            req,
                            id: element.value.id,
                            data: element,
                            key: 'value',
                            overrideAccess,
                            depth,
                            currentDepth,
                            field,
                            collection,
                            showHiddenFields,
                        }));
                    }
                    if (element.type === 'upload' && Array.isArray((_e = (_d = (_c = (_b = field.admin) === null || _b === void 0 ? void 0 : _b.upload) === null || _c === void 0 ? void 0 : _c.collections) === null || _d === void 0 ? void 0 : _d[element === null || element === void 0 ? void 0 : element.relationTo]) === null || _e === void 0 ? void 0 : _e.fields)) {
                        (0, recurseNestedFields_1.recurseNestedFields)({
                            promises,
                            data: element.fields || {},
                            fields: field.admin.upload.collections[element.relationTo].fields,
                            req,
                            overrideAccess,
                            depth,
                            currentDepth,
                            showHiddenFields,
                        });
                    }
                }
                if (element.type === 'link') {
                    if (((_f = element === null || element === void 0 ? void 0 : element.doc) === null || _f === void 0 ? void 0 : _f.value) && ((_g = element === null || element === void 0 ? void 0 : element.doc) === null || _g === void 0 ? void 0 : _g.relationTo)) {
                        const collection = req.payload.collections[(_h = element === null || element === void 0 ? void 0 : element.doc) === null || _h === void 0 ? void 0 : _h.relationTo];
                        if (collection) {
                            promises.push((0, populate_1.populate)({
                                req,
                                id: element.doc.value,
                                data: element.doc,
                                key: 'value',
                                overrideAccess,
                                depth,
                                currentDepth,
                                field,
                                collection,
                                showHiddenFields,
                            }));
                        }
                    }
                    if (Array.isArray((_k = (_j = field.admin) === null || _j === void 0 ? void 0 : _j.link) === null || _k === void 0 ? void 0 : _k.fields)) {
                        (0, recurseNestedFields_1.recurseNestedFields)({
                            promises,
                            data: element.fields || {},
                            fields: (_m = (_l = field.admin) === null || _l === void 0 ? void 0 : _l.link) === null || _m === void 0 ? void 0 : _m.fields,
                            req,
                            overrideAccess,
                            depth,
                            currentDepth,
                            showHiddenFields,
                        });
                    }
                }
            }
            if (element === null || element === void 0 ? void 0 : element.children) {
                (0, exports.recurseRichText)({
                    children: element.children,
                    currentDepth,
                    depth,
                    field,
                    overrideAccess,
                    promises,
                    req,
                    showHiddenFields,
                });
            }
        });
    }
};
exports.recurseRichText = recurseRichText;
const richTextRelationshipPromise = async ({ currentDepth, depth, field, overrideAccess, req, siblingDoc, showHiddenFields, }) => {
    const promises = [];
    (0, exports.recurseRichText)({
        children: siblingDoc[field.name],
        currentDepth,
        depth,
        field,
        overrideAccess,
        promises,
        req,
        showHiddenFields,
    });
    await Promise.all(promises);
};
exports.default = richTextRelationshipPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpZWxkcy9yaWNoVGV4dC9yaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsK0RBQTREO0FBQzVELHlDQUFzQztBQXVCL0IsTUFBTSxlQUFlLEdBQUcsQ0FBQyxFQUM5QixHQUFHLEVBQ0gsUUFBUSxFQUNSLGNBQWMsR0FBRyxLQUFLLEVBQ3RCLEtBQUssRUFDTCxZQUFZLEdBQUcsQ0FBQyxFQUNoQixLQUFLLEVBQ0wsUUFBUSxFQUNSLGdCQUFnQixHQUNJLEVBQVEsRUFBRTtJQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDMUIsUUFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7WUFDdEMsSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLElBQUksS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQzt3QkFDN0QsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSywwQ0FBRSxFQUFFLENBQUEsRUFBRTtvQkFDdkIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUVoRSxJQUFJLFVBQVUsRUFBRTt3QkFDZCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUEsbUJBQVEsRUFBQzs0QkFDckIsR0FBRzs0QkFDSCxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNwQixJQUFJLEVBQUUsT0FBTzs0QkFDYixHQUFHLEVBQUUsT0FBTzs0QkFDWixjQUFj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