"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
const types_1 = require("../../config/types");
const traverseFields_1 = require("./traverseFields");
// This function is responsible for the following actions, in order:
// - Sanitize incoming data
// - Execute field hooks
// - Execute field access control
const promise = async ({ data, doc, field, id, operation, overrideAccess, req, siblingData, siblingDoc, }) => {
    var _a, _b;
    if ((0, types_1.fieldAffectsData)(field)) {
        if (field.name === 'id') {
            if (field.type === 'number' && typeof siblingData[field.name] === 'string') {
                const value = siblingData[field.name];
                siblingData[field.name] = parseFloat(value);
            }
            if (field.type === 'text' && typeof ((_a = siblingData[field.name]) === null || _a === void 0 ? void 0 : _a.toString) === 'function' && typeof siblingData[field.name] !== 'string') {
                siblingData[field.name] = siblingData[field.name].toString();
            }
        }
        // Sanitize incoming data
        switch (field.type) {
            case 'number': {
                if (typeof siblingData[field.name] === 'string') {
                    const value = siblingData[field.name];
                    const trimmed = value.trim();
                    siblingData[field.name] = (trimmed.length === 0) ? null : parseFloat(trimmed);
                }
                break;
            }
            case 'checkbox': {
                if (siblingData[field.name] === 'true')
                    siblingData[field.name] = true;
                if (siblingData[field.name] === 'false')
                    siblingData[field.name] = false;
                if (siblingData[field.name] === '')
                    siblingData[field.name] = false;
                break;
            }
            case 'richText': {
                if (typeof siblingData[field.name] === 'string') {
                    try {
                        const richTextJSON = JSON.parse(siblingData[field.name]);
                        siblingData[field.name] = richTextJSON;
                    }
                    catch {
                        // Disregard this data as it is not valid.
                        // Will be reported to user by field validation
                    }
                }
                break;
            }
            case 'relationship':
            case 'upload': {
                if (siblingData[field.name] === '' || siblingData[field.name] === 'none' || siblingData[field.name] === 'null' || siblingData[field.name] === null) {
                    if (field.type === 'relationship' && field.hasMany === true) {
                        siblingData[field.name] = [];
                    }
                    else {
                        siblingData[field.name] = null;
                    }
                }
                const value = siblingData[field.name];
                if (Array.isArray(field.relationTo)) {
                    if (Array.isArray(value)) {
                        value.forEach((relatedDoc, i) => {
                            const relatedCollection = req.payload.config.collections.find((collection) => collection.slug === relatedDoc.relationTo);
                            const relationshipIDField = relatedCollection.fields.find((collectionField) => (0, types_1.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                            if ((relationshipIDField === null || relationshipIDField === void 0 ? void 0 : relationshipIDField.type) === 'number') {
                                siblingData[field.name][i] = { ...relatedDoc, value: parseFloat(relatedDoc.value) };
                            }
                        });
                    }
                    if (field.type === 'relationship' && field.hasMany !== true && (0, types_1.valueIsValueWithRelation)(value)) {
                        const relatedCollection = req.payload.config.collections.find((collection) => collection.slug === value.relationTo);
                        const relationshipIDField = relatedCollection.fields.find((collectionField) => (0, types_1.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                        if ((relationshipIDField === null || relationshipIDField === void 0 ? void 0 : relationshipIDField.type) === 'number') {
                            siblingData[field.name] = { ...value, value: parseFloat(value.value) };
                        }
                    }
                }
                else {
                    if (Array.isArray(value)) {
                        value.forEach((relatedDoc, i) => {
                            const relatedCollection = req.payload.config.collections.find((collection) => collection.slug === field.relationTo);
                            const relationshipIDField = relatedCollection.fields.find((collectionField) => (0, types_1.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                            if ((relationshipIDField === null || relationshipIDField === void 0 ? void 0 : relationshipIDField.type) === 'number') {
                                siblingData[field.name][i] = parseFloat(relatedDoc);
                            }
                        });
                    }
                    if (field.type === 'relationship' && field.hasMany !== true && value) {
                        const relatedCollection = req.payload.config.collections.find((collection) => collection.slug === field.relationTo);
                        const relationshipIDField = relatedCollection.fields.find((collectionField) => (0, types_1.fieldAffectsData)(collectionField) && collectionField.name === 'id');
                        if ((relationshipIDField === null || relationshipIDField === void 0 ? void 0 : relationshipIDField.type) === 'number') {
                            siblingData[field.name] = parseFloat(value);
                        }
                    }
                }
                break;
            }
            case 'array':
            case 'blocks': {
                // Handle cases of arrays being intentionally set to 0
                if (siblingData[field.name] === '0' || siblingData[field.name] === 0 || siblingData[field.name] === null) {
                    siblingData[field.name] = [];
                }
                break;
            }
            default: {
                break;
            }
        }
        // Execute hooks
        if ((_b = field.hooks) === null || _b === void 0 ? void 0 : _b.beforeValidate) {
            await field.hooks.beforeValidate.reduce(async (priorHook, currentHook) => {
                await priorHook;
                const hookedValue = await currentHook({
                    value: siblingData[field.name],
                    originalDoc: doc,
                    data,
                    siblingData,
                    operation,
                    req,
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
        // Execute access control
        if (field.access && field.access[operation]) {
            const result = overrideAccess ? true : await field.access[operation]({ req, id, siblingData, data, doc });
            if (!result) {
                delete siblingData[field.name];
            }
        }
    }
    // Traverse subfields
    switch (field.type) {
        case 'group': {
            let groupData = siblingData[field.name];
            let groupDoc = siblingDoc[field.name];
            if (typeof siblingData[field.name] !== 'object')
                groupData = {};
            if (typeof siblingDoc[field.name] !== 'object')
                groupDoc = {};
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                fields: field.fields,
                id,
                operation,
                overrideAccess,
                req,
                siblingData: groupData,
                siblingDoc: groupDoc,
            });
            break;
        }
        case 'array': {
            const rows = siblingData[field.name];
            if (Array.isArray(rows)) {
                const promises = [];
                rows.forEach((row, i) => {
                    var _a;
                    promises.push((0, traverseFields_1.traverseFields)({
                        data,
                        doc,
                        fields: field.fields,
                        id,
                        operation,
                        overrideAccess,
                        req,
                        siblingData: row,
                        siblingDoc: ((_a = siblingDoc[field.name]) === null || _a === void 0 ? void 0 : _a[i]) || {},
                    }));
                });
                await Promise.all(promises);
            }
            break;
        }
        case 'blocks': {
            const rows = siblingData[field.name];
            if (Array.isArray(rows)) {
                const promises = [];
                rows.forEach((row, i) => {
                    var _a;
                    const block = field.blocks.find((blockType) => blockType.slug === row.blockType);
                    if (block) {
                        promises.push((0, traverseFields_1.traverseFields)({
                            data,
                            doc,
                            fields: block.fields,
                            id,
                            operation,
                            overrideAccess,
                            req,
                            siblingData: row,
                            siblingDoc: ((_a = siblingDoc[field.name]) === null || _a === void 0 ? void 0 : _a[i]) || {},
                        }));
                    }
                });
                await Promise.all(promises);
            }
            break;
        }
        case 'row':
        case 'collapsible': {
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                fields: field.fields,
                id,
                operation,
                overrideAccess,
                req,
                siblingData,
                siblingDoc,
            });
            break;
        }
        case 'tab': {
            let tabSiblingData;
            let tabSiblingDoc;
            if ((0, types_1.tabHasName)(field)) {
                tabSiblingData = typeof siblingData[field.name] === 'object' ? siblingData[field.name] : {};
                tabSiblingDoc = typeof siblingDoc[field.name] === 'object' ? siblingDoc[field.name] : {};
            }
            else {
                tabSiblingData = siblingData;
                tabSiblingDoc = siblingDoc;
            }
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                fields: field.fields,
                id,
                operation,
                overrideAccess,
                req,
                siblingData: tabSiblingData,
                siblingDoc: tabSiblingDoc,
            });
            break;
        }
        case 'tabs': {
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                fields: field.tabs.map((tab) => ({ ...tab, type: 'tab' })),
                id,
                operation,
                overrideAccess,
                req,
                siblingData,
                siblingDoc,
            });
            break;
        }
        default: {
            break;
        }
    }
};
exports.promise = promise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlVmFsaWRhdGUvcHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4Q0FBK0c7QUFDL0cscURBQWtEO0FBY2xELG9FQUFvRTtBQUNwRSwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLGlDQUFpQztBQUUxQixNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsRUFDNUIsSUFBSSxFQUNKLEdBQUcsRUFDSCxLQUFLLEVBQ0wsRUFBRSxFQUNGLFNBQVMsRUFDVCxjQUFjLEVBQ2QsR0FBRyxFQUNILFdBQVcsRUFDWCxVQUFVLEdBQ0wsRUFBaUIsRUFBRTs7SUFDeEIsSUFBSSxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzNCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMxRSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBVyxDQUFDO2dCQUVoRCxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztZQUVELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksT0FBTyxDQUFBLE1BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMENBQUUsUUFBUSxDQUFBLEtBQUssVUFBVSxJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ25JLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM5RDtTQUNGO1FBRUQseUJBQXlCO1FBQ3pCLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNsQixLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDL0MsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVcsQ0FBQztvQkFDaEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM3QixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9FO2dCQUVELE1BQU07YUFDUDtZQUVELEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU07b0JBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxPQUFPO29CQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN6RSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFFcEUsTUFBTTthQUNQO1lBRUQsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDZixJQUFJLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQy9DLElBQUk7d0JBQ0YsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBVyxDQUFDLENBQUM7d0JBQ25FLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO3FCQUN4QztvQkFBQyxNQUFNO3dCQUNOLDBDQUEwQzt3QkFDMUMsK0NBQStDO3FCQUNoRDtpQkFDRjtnQkFFRCxNQUFNO2FBQ1A7WUFFRCxLQUFLLGNBQWMsQ0FBQztZQUNwQixLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNiLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ2xKLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxjQUFjLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7d0JBQzNELFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDTCxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztxQkFDaEM7aUJBQ0Y7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBa0QsRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDdEUsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDekgsTUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFBLHdCQUFnQixFQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7NEJBQ25KLElBQUksQ0FBQSxtQkFBbUIsYUFBbkIsbUJBQW1CLHVCQUFuQixtQkFBbUIsQ0FBRSxJQUFJLE1BQUssUUFBUSxFQUFFO2dDQUMxQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBZSxDQUFDLEVBQUUsQ0FBQzs2QkFDL0Y7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFBLGdDQUF3QixFQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUM5RixNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNwSCxNQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUEsd0JBQWdCLEVBQUMsZUFBZSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQzt3QkFDbkosSUFBSSxDQUFBLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLElBQUksTUFBSyxRQUFRLEVBQUU7NEJBQzFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUMsRUFBRSxDQUFDO3lCQUNsRjtxQkFDRjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN2QyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNwSCxNQUFNLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUEsd0JBQWdCLEVBQUMsZUFBZSxDQUFDLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQzs0QkFDbkosSUFBSSxDQUFBLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLElBQUksTUFBSyxRQUFRLEVBQUU7Z0NBQzFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQW9CLENBQUMsQ0FBQzs2QkFDL0Q7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7b0JBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7d0JBQ3BFLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3BILE1BQU0sbUJBQW1CLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsSUFBQSx3QkFBZ0IsRUFBQyxlQUFlLENBQUMsSUFBSSxlQUFlLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO3dCQUNuSixJQUFJLENBQUEsbUJBQW1CLGFBQW5CLG1CQUFtQix1QkFBbkIsbUJBQW1CLENBQUUsSUFBSSxNQUFLLFFBQVEsRUFBRTs0QkFDMUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBZSxDQUFDLENBQUM7eUJBQ3ZEO3FCQUNGO2lCQUNGO2dCQUNELE1BQU07YUFDUDtZQUVELEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixzREFBc0Q7Z0JBQ3RELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ3hHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUM5QjtnQkFFRCxNQUFNO2FBQ1A7WUFFRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxNQUFNO2FBQ1A7U0FDRjtRQUVELGdCQUFnQjtRQUNoQixJQUFJLE1BQUEsS0FBSyxDQUFDLEtBQUssMENBQUUsY0FBYyxFQUFFO1lBQy9CLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQ3ZFLE1BQU0sU0FBUyxDQUFDO2dCQUVoQixNQUFNLFdBQVcsR0FBRyxNQUFNLFdBQVcsQ0FBQztvQkFDcEMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUM5QixXQUFXLEVBQUUsR0FBRztvQkFDaEIsSUFBSTtvQkFDSixXQUFXO29CQUNYLFNBQVM7b0JBQ1QsR0FBRztpQkFDSixDQUFDLENBQUM7Z0JBRUgsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUM3QixXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztpQkFDdkM7WUFDSCxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDdkI7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0MsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRTFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7S0FDRjtJQUVELHFCQUFxQjtJQUNyQixRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDbEIsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUE0QixDQUFDO1lBQ25FLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUE0QixDQUFDO1lBRWpFLElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVE7Z0JBQUUsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNoRSxJQUFJLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRO2dCQUFFLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFOUQsTUFBTSxJQUFBLCtCQUFjLEVBQUM7Z0JBQ25CLElBQUk7Z0JBQ0osR0FBRztnQkFDSCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07Z0JBQ3BCLEVBQUU7Z0JBQ0YsU0FBUztnQkFDVCxjQUFjO2dCQUNkLEdBQUc7Z0JBQ0gsV0FBVyxFQUFFLFNBQVM7Z0JBQ3RCLFVBQVUsRUFBRSxRQUFRO2FBQ3JCLENBQUMsQ0FBQztZQUVILE1BQU07U0FDUDtRQUVELEtBQUssT0FBTyxDQUFDLENBQUM7WUFDWixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXJDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFOztvQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFBLCtCQUFjLEVBQUM7d0JBQzNCLElBQUk7d0JBQ0osR0FBRzt3QkFDSCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07d0JBQ3BCLEVBQUU7d0JBQ0YsU0FBUzt3QkFDVCxjQUFjO3dCQUNkLEdBQUc7d0JBQ0gsV0FBVyxFQUFFLEdBQUc7d0JBQ2hCLFVBQVUsRUFBRSxDQUFBLE1BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMENBQUcsQ0FBQyxDQUFDLEtBQUksRUFBRTtxQkFDOUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsTUFBTTtTQUNQO1FBRUQsS0FBSyxRQUFRLENBQUMsQ0FBQztZQUNiLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUN0QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRWpGLElBQUksS0FBSyxFQUFFO3dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBQSwrQkFBYyxFQUFDOzRCQUMzQixJQUFJOzRCQUNKLEdBQUc7NEJBQ0gsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNOzRCQUNwQixFQUFFOzRCQUNGLFNBQVM7NEJBQ1QsY0FBYzs0QkFDZCxHQUFHOzRCQUNILFdBQVcsRUFBRSxHQUFHOzRCQUNoQixVQUFVLEVBQUUsQ0FBQSxNQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDBDQUFHLENBQUMsQ0FBQyxLQUFJLEVBQUU7eUJBQzlDLENBQUMsQ0FBQyxDQUFDO3FCQUNMO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM3QjtZQUVELE1BQU07U0FDUDtRQUVELEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxhQUFhLENBQUMsQ0FBQztZQUNsQixNQUFNLElBQUEsK0JBQWMsRUFBQztnQkFDbkIsSUFBSTtnQkFDSixHQUFHO2dCQUNILE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtnQkFDcEIsRUFBRTtnQkFDRixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsR0FBRztnQkFDSCxXQUFXO2dCQUNYLFVBQVU7YUFDWCxDQUFDLENBQUM7WUFFSCxNQUFNO1NBQ1A7UUFFRCxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQ1YsSUFBSSxjQUFjLENBQUM7WUFDbkIsSUFBSSxhQUFhLENBQUM7WUFDbEIsSUFBSSxJQUFBLGtCQUFVLEVBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLGNBQWMsR0FBRyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzVGLGFBQWEsR0FBRyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDMUY7aUJBQU07Z0JBQ0wsY0FBYyxHQUFHLFdBQVcsQ0FBQztnQkFDN0IsYUFBYSxHQUFHLFVBQVUsQ0FBQzthQUM1QjtZQUVELE1BQU0sSUFBQSwrQkFBYyxFQUFDO2dCQUNuQixJQUFJO2dCQUNKLEdBQUc7Z0JBQ0gsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixFQUFFO2dCQUNGLFNBQVM7Z0JBQ1QsY0FBYztnQkFDZCxHQUFHO2dCQUNILFdBQVcsRUFBRSxjQUFjO2dCQUMzQixVQUFVLEVBQUUsYUFBYTthQUMxQixDQUFDLENBQUM7WUFFSCxNQUFNO1NBQ1A7UUFFRCxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ1gsTUFBTSxJQUFBLCtCQUFjLEVBQUM7Z0JBQ25CLElBQUk7Z0JBQ0osR0FBRztnQkFDSCxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDMUQsRUFBRTtnQkFDRixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsR0FBRztnQkFDSCxXQUFXO2dCQUNYLFVBQVU7YUFDWCxDQUFDLENBQUM7WUFFSCxNQUFNO1NBQ1A7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE1BQU07U0FDUDtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBblNXLFFBQUEsT0FBTyxXQW1TbEIifQ==