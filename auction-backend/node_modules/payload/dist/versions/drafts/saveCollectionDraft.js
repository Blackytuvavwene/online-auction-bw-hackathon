"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCollectionDraft = void 0;
const enforceMaxVersions_1 = require("../enforceMaxVersions");
const saveCollectionDraft = async ({ payload, config, id, data, autosave, }) => {
    const VersionsModel = payload.versions[config.slug];
    let existingAutosaveVersion;
    if (autosave) {
        existingAutosaveVersion = await VersionsModel.findOne({
            parent: id,
        }, {}, { sort: { updatedAt: 'desc' } });
    }
    let result;
    try {
        // If there is an existing autosave document,
        // Update it
        if (autosave && (existingAutosaveVersion === null || existingAutosaveVersion === void 0 ? void 0 : existingAutosaveVersion.autosave) === true) {
            result = await VersionsModel.findByIdAndUpdate({
                _id: existingAutosaveVersion._id,
            }, {
                version: data,
            }, { new: true, lean: true });
            // Otherwise, create a new one
        }
        else {
            result = await VersionsModel.create({
                parent: id,
                version: data,
                autosave: Boolean(autosave),
            });
        }
    }
    catch (err) {
        payload.logger.error(`There was an error while creating a draft ${config.labels.singular} with ID ${id}.`);
        payload.logger.error(err);
    }
    if (config.versions.maxPerDoc) {
        (0, enforceMaxVersions_1.enforceMaxVersions)({
            id,
            payload,
            Model: VersionsModel,
            entityLabel: config.labels.plural,
            entityType: 'collection',
            max: config.versions.maxPerDoc,
        });
    }
    result = result.version;
    result = JSON.stringify(result);
    result = JSON.parse(result);
    result.id = id;
    return result;
};
exports.saveCollectionDraft = saveCollectionDraft;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUNvbGxlY3Rpb25EcmFmdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9kcmFmdHMvc2F2ZUNvbGxlY3Rpb25EcmFmdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSw4REFBMkQ7QUFZcEQsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLEVBQUUsRUFDeEMsT0FBTyxFQUNQLE1BQU0sRUFDTixFQUFFLEVBQ0YsSUFBSSxFQUNKLFFBQVEsR0FDSCxFQUFvQyxFQUFFO0lBQzNDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBELElBQUksdUJBQXVCLENBQUM7SUFFNUIsSUFBSSxRQUFRLEVBQUU7UUFDWix1QkFBdUIsR0FBRyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDcEQsTUFBTSxFQUFFLEVBQUU7U0FDWCxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDekM7SUFFRCxJQUFJLE1BQU0sQ0FBQztJQUVYLElBQUk7UUFDRiw2Q0FBNkM7UUFDN0MsWUFBWTtRQUNaLElBQUksUUFBUSxJQUFJLENBQUEsdUJBQXVCLGFBQXZCLHVCQUF1Qix1QkFBdkIsdUJBQXVCLENBQUUsUUFBUSxNQUFLLElBQUksRUFBRTtZQUMxRCxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsaUJBQWlCLENBQzVDO2dCQUNFLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQyxHQUFHO2FBQ2pDLEVBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUk7YUFDZCxFQUNELEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQzFCLENBQUM7WUFDSiw4QkFBOEI7U0FDN0I7YUFBTTtZQUNMLE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUM3QixJQUFBLHVDQUFrQixFQUFDO1lBQ2pCLEVBQUU7WUFDRixPQUFPO1lBQ1AsS0FBSyxFQUFFLGFBQWE7WUFDcEIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNqQyxVQUFVLEVBQUUsWUFBWTtZQUN4QixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1NBQy9CLENBQUMsQ0FBQztLQUNKO0lBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFFZixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUE5RFcsUUFBQSxtQkFBbUIsdUJBOEQ5QiJ9