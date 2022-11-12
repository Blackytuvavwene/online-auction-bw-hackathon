"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../config/types");
const populate = async ({ depth, currentDepth, req, overrideAccess, dataReference, data, field, index, showHiddenFields, }) => {
    const dataToUpdate = dataReference;
    const relation = Array.isArray(field.relationTo) ? data.relationTo : field.relationTo;
    const relatedCollection = req.payload.collections[relation];
    if (relatedCollection) {
        let id = Array.isArray(field.relationTo) ? data.value : data;
        let relationshipValue;
        const shouldPopulate = depth && currentDepth <= depth;
        if (typeof id !== 'string' && typeof id !== 'number' && typeof (id === null || id === void 0 ? void 0 : id.toString) === 'function') {
            id = id.toString();
        }
        if (shouldPopulate) {
            relationshipValue = await req.payloadDataLoader.load(JSON.stringify([
                relatedCollection.config.slug,
                id,
                depth,
                currentDepth + 1,
                req.locale,
                req.fallbackLocale,
                overrideAccess,
                showHiddenFields,
            ]));
        }
        if (!relationshipValue) {
            // ids are visible regardless of access controls
            relationshipValue = id;
        }
        if (typeof index === 'number') {
            if (Array.isArray(field.relationTo)) {
                dataToUpdate[field.name][index].value = relationshipValue;
            }
            else {
                dataToUpdate[field.name][index] = relationshipValue;
            }
        }
        else if (Array.isArray(field.relationTo)) {
            dataToUpdate[field.name].value = relationshipValue;
        }
        else {
            dataToUpdate[field.name] = relationshipValue;
        }
    }
};
const relationshipPopulationPromise = async ({ siblingDoc, field, depth, currentDepth, req, overrideAccess, showHiddenFields, }) => {
    const resultingDoc = siblingDoc;
    const populateDepth = (0, types_1.fieldHasMaxDepth)(field) && field.maxDepth < depth ? field.maxDepth : depth;
    if ((0, types_1.fieldSupportsMany)(field) && field.hasMany && Array.isArray(siblingDoc[field.name])) {
        const rowPromises = [];
        siblingDoc[field.name].forEach((relatedDoc, index) => {
            const rowPromise = async () => {
                if (relatedDoc) {
                    await populate({
                        depth: populateDepth,
                        currentDepth,
                        req,
                        overrideAccess,
                        data: relatedDoc,
                        dataReference: resultingDoc,
                        field,
                        index,
                        showHiddenFields,
                    });
                }
            };
            rowPromises.push(rowPromise());
        });
        await Promise.all(rowPromises);
    }
    else if (siblingDoc[field.name]) {
        await populate({
            depth: populateDepth,
            currentDepth,
            req,
            overrideAccess,
            dataReference: resultingDoc,
            data: siblingDoc[field.name],
            field,
            showHiddenFields,
        });
    }
};
exports.default = relationshipPopulationPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRpb25zaGlwUG9wdWxhdGlvblByb21pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2FmdGVyUmVhZC9yZWxhdGlvbnNoaXBQb3B1bGF0aW9uUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUF5RztBQWN6RyxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFDdEIsS0FBSyxFQUNMLFlBQVksRUFDWixHQUFHLEVBQ0gsY0FBYyxFQUNkLGFBQWEsRUFDYixJQUFJLEVBQ0osS0FBSyxFQUNMLEtBQUssRUFDTCxnQkFBZ0IsR0FDSCxFQUFFLEVBQUU7SUFDakIsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDO0lBQ25DLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsVUFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNsRyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTVELElBQUksaUJBQWlCLEVBQUU7UUFDckIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLGlCQUFpQixDQUFDO1FBQ3RCLE1BQU0sY0FBYyxHQUFHLEtBQUssSUFBSSxZQUFZLElBQUksS0FBSyxDQUFDO1FBRXRELElBQUksT0FBTyxFQUFFLEtBQUssUUFBUSxJQUFJLE9BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUEsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLFFBQVEsQ0FBQSxLQUFLLFVBQVUsRUFBRTtZ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