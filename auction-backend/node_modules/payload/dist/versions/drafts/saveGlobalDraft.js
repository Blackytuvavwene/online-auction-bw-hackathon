"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveGlobalDraft = void 0;
const enforceMaxVersions_1 = require("../enforceMaxVersions");
const saveGlobalDraft = async ({ payload, config, data, autosave, }) => {
    const VersionsModel = payload.versions[config.slug];
    let existingAutosaveVersion;
    if (autosave) {
        existingAutosaveVersion = await VersionsModel.findOne();
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
                version: data,
                autosave: Boolean(autosave),
            });
        }
    }
    catch (err) {
        payload.logger.error(`There was an error while saving a draft for the Global ${config.label}.`);
        payload.logger.error(err);
    }
    if (config.versions.max) {
        (0, enforceMaxVersions_1.enforceMaxVersions)({
            payload: this,
            Model: VersionsModel,
            entityLabel: config.label,
            entityType: 'global',
            max: config.versions.max,
        });
    }
    result = result.version;
    result = JSON.stringify(result);
    result = JSON.parse(result);
    return result;
};
exports.saveGlobalDraft = saveGlobalDraft;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUdsb2JhbERyYWZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZlcnNpb25zL2RyYWZ0cy9zYXZlR2xvYmFsRHJhZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOERBQTJEO0FBVXBELE1BQU0sZUFBZSxHQUFHLEtBQUssRUFBRSxFQUNwQyxPQUFPLEVBQ1AsTUFBTSxFQUNOLElBQUksRUFDSixRQUFRLEdBQ0gsRUFBaUIsRUFBRTtJQUN4QixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxJQUFJLHVCQUF1QixDQUFDO0lBRTVCLElBQUksUUFBUSxFQUFFO1FBQ1osdUJBQXVCLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDekQ7SUFFRCxJQUFJLE1BQU0sQ0FBQztJQUVYLElBQUk7UUFDRiw2Q0FBNkM7UUFDN0MsWUFBWTtRQUNaLElBQUksUUFBUSxJQUFJLENBQUEsdUJBQXVCLGFBQXZCLHVCQUF1Qix1QkFBdkIsdUJBQXVCLENBQUUsUUFBUSxNQUFLLElBQUksRUFBRTtZQUMxRCxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsaUJBQWlCLENBQzVDO2dCQUNFLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQyxHQUFHO2FBQ2pDLEVBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUk7YUFDZCxFQUNELEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQzFCLENBQUM7WUFDSiw4QkFBOEI7U0FDN0I7YUFBTTtZQUNMLE1BQU0sR0FBRyxNQUFNLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2FBQzVCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNoRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDdkIsSUFBQSx1Q0FBa0IsRUFBQztZQUNqQixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxhQUFhO1lBQ3BCLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSztZQUN6QixVQUFVLEVBQUUsUUFBUTtZQUNwQixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1NBQ3pCLENBQUMsQ0FBQztLQUNKO0lBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFNUIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBeERXLFFBQUEsZUFBZSxtQkF3RDFCIn0=