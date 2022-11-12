"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
const types_1 = require("../../config/types");
const traverseFields_1 = require("./traverseFields");
// This function is responsible for the following actions, in order:
// - Execute field hooks
const promise = async ({ data, doc, previousDoc, previousSiblingDoc, field, operation, req, siblingData, siblingDoc, }) => {
    var _a;
    if ((0, types_1.fieldAffectsData)(field)) {
        // Execute hooks
        if ((_a = field.hooks) === null || _a === void 0 ? void 0 : _a.afterChange) {
            await field.hooks.afterChange.reduce(async (priorHook, currentHook) => {
                await priorHook;
                const hookedValue = await currentHook({
                    value: siblingData[field.name],
                    originalDoc: doc,
                    previousDoc,
                    previousSiblingDoc,
                    previousValue: previousDoc[field.name],
                    data,
                    siblingData,
                    operation,
                    req,
                });
                if (hookedValue !== undefined) {
                    siblingDoc[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
    }
    // Traverse subfields
    switch (field.type) {
        case 'group': {
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                previousDoc,
                previousSiblingDoc: previousDoc[field.name],
                fields: field.fields,
                operation,
                req,
                siblingData: siblingData[field.name] || {},
                siblingDoc: siblingDoc[field.name],
            });
            break;
        }
        case 'array': {
            const rows = siblingDoc[field.name];
            if (Array.isArray(rows)) {
                const promises = [];
                rows.forEach((row, i) => {
                    var _a, _b;
                    promises.push((0, traverseFields_1.traverseFields)({
                        data,
                        doc,
                        previousDoc,
                        previousSiblingDoc: ((_a = previousDoc[field.name]) === null || _a === void 0 ? void 0 : _a[i]) || {},
                        fields: field.fields,
                        operation,
                        req,
                        siblingData: ((_b = siblingData[field.name]) === null || _b === void 0 ? void 0 : _b[i]) || {},
                        siblingDoc: { ...row } || {},
                    }));
                });
                await Promise.all(promises);
            }
            break;
        }
        case 'blocks': {
            const rows = siblingDoc[field.name];
            if (Array.isArray(rows)) {
                const promises = [];
                rows.forEach((row, i) => {
                    var _a, _b;
                    const block = field.blocks.find((blockType) => blockType.slug === row.blockType);
                    if (block) {
                        promises.push((0, traverseFields_1.traverseFields)({
                            data,
                            doc,
                            previousDoc,
                            previousSiblingDoc: ((_a = previousDoc[field.name]) === null || _a === void 0 ? void 0 : _a[i]) || {},
                            fields: block.fields,
                            operation,
                            req,
                            siblingData: ((_b = siblingData[field.name]) === null || _b === void 0 ? void 0 : _b[i]) || {},
                            siblingDoc: { ...row } || {},
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
                previousDoc,
                previousSiblingDoc: { ...previousSiblingDoc },
                fields: field.fields,
                operation,
                req,
                siblingData: siblingData || {},
                siblingDoc: { ...siblingDoc },
            });
            break;
        }
        case 'tab': {
            let tabSiblingData = siblingData;
            let tabSiblingDoc = siblingDoc;
            let tabPreviousSiblingDoc = siblingDoc;
            if ((0, types_1.tabHasName)(field)) {
                tabSiblingData = siblingData[field.name];
                tabSiblingDoc = siblingDoc[field.name];
                tabPreviousSiblingDoc = previousDoc[field.name];
            }
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                fields: field.fields,
                operation,
                req,
                previousSiblingDoc: tabPreviousSiblingDoc,
                previousDoc,
                siblingData: tabSiblingData,
                siblingDoc: tabSiblingDoc,
            });
            break;
        }
        case 'tabs': {
            await (0, traverseFields_1.traverseFields)({
                data,
                doc,
                previousDoc,
                previousSiblingDoc: { ...previousSiblingDoc },
                fields: field.tabs.map((tab) => ({ ...tab, type: 'tab' })),
                operation,
                req,
                siblingData: siblingData || {},
                siblingDoc: { ...siblingDoc },
            });
            break;
        }
        default: {
            break;
        }
    }
};
exports.promise = promise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UvcHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4Q0FBcUY7QUFDckYscURBQWtEO0FBY2xELG9FQUFvRTtBQUNwRSx3QkFBd0I7QUFFakIsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLEVBQzVCLElBQUksRUFDSixHQUFHLEVBQ0gsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixLQUFLLEVBQ0wsU0FBUyxFQUNULEdBQUcsRUFDSCxXQUFXLEVBQ1gsVUFBVSxHQUNMLEVBQWlCLEVBQUU7O0lBQ3hCLElBQUksSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsRUFBRTtRQUMzQixnQkFBZ0I7UUFDaEIsSUFBSSxNQUFBLEtBQUssQ0FBQyxLQUFLLDBDQUFFLFdBQVcsRUFBRTtZQUM1QixNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxFQUFFO2dCQUNwRSxNQUFNLFNBQVMsQ0FBQztnQkFFaEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxXQUFXLENBQUM7b0JBQ3BDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDOUIsV0FBVyxFQUFFLEdBQUc7b0JBQ2hCLFdBQVc7b0JBQ1gsa0JBQWtCO29CQUNsQixhQUFhLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3RDLElBQUk7b0JBQ0osV0FBVztvQkFDWCxTQUFTO29CQUNULEdBQUc7aUJBQ0osQ0FBQyxDQUFDO2dCQUVILElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQ3RDO1lBQ0gsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxP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