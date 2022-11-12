"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCollectionVersion = void 0;
const enforceMaxVersions_1 = require("./enforceMaxVersions");
const sanitizeInternalFields_1 = __importDefault(require("../utilities/sanitizeInternalFields"));
const afterRead_1 = require("../fields/hooks/afterRead");
const saveCollectionVersion = async ({ payload, config, req, id, docWithLocales, }) => {
    var _a, _b;
    const VersionModel = payload.versions[config.slug];
    let version = docWithLocales;
    if ((_a = config.versions) === null || _a === void 0 ? void 0 : _a.drafts) {
        const latestVersion = await VersionModel.findOne({
            parent: {
                $eq: docWithLocales.id,
            },
            updatedAt: {
                $gt: docWithLocales.updatedAt,
            },
        }, {}, {
            lean: true,
            leanWithId: true,
            sort: {
                updatedAt: 'desc',
            },
        });
        if (latestVersion) {
            // If the latest version is a draft, no need to re-save it
            // Example: when "promoting" a draft to published, the draft already exists.
            // Instead, return null
            if (((_b = latestVersion === null || latestVersion === void 0 ? void 0 : latestVersion.version) === null || _b === void 0 ? void 0 : _b._status) === 'draft') {
                return null;
            }
            version = latestVersion.version;
            version = JSON.parse(JSON.stringify(version));
            version = (0, sanitizeInternalFields_1.default)(version);
        }
    }
    version = await (0, afterRead_1.afterRead)({
        depth: 0,
        doc: version,
        entityConfig: config,
        req,
        overrideAccess: true,
        showHiddenFields: true,
        flattenLocales: false,
    });
    if (version._id)
        delete version._id;
    let createdVersion;
    try {
        createdVersion = await VersionModel.create({
            parent: id,
            version,
            autosave: false,
        });
    }
    catch (err) {
        payload.logger.error(`There was an error while saving a version for the ${config.labels.singular} with ID ${id}.`);
        payload.logger.error(err);
    }
    if (config.versions.maxPerDoc) {
        (0, enforceMaxVersions_1.enforceMaxVersions)({
            id,
            payload,
            Model: VersionModel,
            entityLabel: config.labels.plural,
            entityType: 'collection',
            max: config.versions.maxPerDoc,
        });
    }
    if (createdVersion) {
        createdVersion = JSON.parse(JSON.stringify(createdVersion));
        createdVersion = (0, sanitizeInternalFields_1.default)(createdVersion);
    }
    return createdVersion;
};
exports.saveCollectionVersion = saveCollectionVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUNvbGxlY3Rpb25WZXJzaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZlcnNpb25zL3NhdmVDb2xsZWN0aW9uVmVyc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSw2REFBMEQ7QUFFMUQsaUdBQXlFO0FBQ3pFLHlEQUFzRDtBQVUvQyxNQUFNLHFCQUFxQixHQUFHLEtBQUssRUFBRSxFQUMxQyxPQUFPLEVBQ1AsTUFBTSxFQUNOLEdBQUcsRUFDSCxFQUFFLEVBQ0YsY0FBYyxHQUNULEVBQWlCLEVBQUU7O0lBQ3hCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5ELElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQztJQUU3QixJQUFJLE1BQUEsTUFBTSxDQUFDLFFBQVEsMENBQUUsTUFBTSxFQUFFO1FBQzNCLE1BQU0sYUFBYSxHQUFHLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUMvQyxNQUFNLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLGNBQWMsQ0FBQyxFQUFFO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULEdBQUcsRUFBRSxjQUFjLENBQUMsU0FBUzthQUM5QjtTQUNGLEVBQ0QsRUFBRSxFQUNGO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtZQUNoQixJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLE1BQU07YUFDbEI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLGFBQWEsRUFBRTtZQUNqQiwwREFBMEQ7WUFDMUQsNEVBQTRFO1lBQzVFLHVCQUF1QjtZQUN2QixJQUFJLENBQUEsTUFBQSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsT0FBTywwQ0FBRSxPQUFPLE1BQUssT0FBTyxFQUFFO2dCQUMvQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sR0FBRyxJQUFBLGdDQUFzQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsTUFBTSxJQUFBLHFCQUFTLEVBQUM7UUFDeEIsS0FBSyxFQUFFLENBQUM7UUFDUixHQUFHLEVBQUUsT0FBTztRQUNaLFlBQVksRUFBRSxNQUFNO1FBQ3BCLEdBQUc7UUFDSCxjQUFjLEVBQUUsSUFBSTtRQUNwQixnQkFBZ0IsRUFBRSxJQUFJO1FBQ3RCLGNBQWMsRUFBRSxLQUFLO0tBQ3RCLENBQUMsQ0FBQztJQUVILElBQUksT0FBTyxDQUFDLEdBQUc7UUFBRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFFcEMsSUFBSSxjQUFjLENBQUM7SUFFbkIsSUFBSTtRQUNGLGNBQWMsR0FBRyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDekMsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPO1lBQ1AsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ILE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0lBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUM3QixJQUFBLHVDQUFrQixFQUFDO1lBQ2pCLEVBQUU7WUFDRixPQUFPO1lBQ1AsS0FBSyxFQUFFLFlBQVk7WUFDbkIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUNqQyxVQUFVLEVBQUUsWUFBWTtZQUN4QixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTO1NBQy9CLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxjQUFjLEVBQUU7UUFDbEIsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzVELGNBQWMsR0FBRyxJQUFBLGdDQUFzQixFQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3pEO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBckZXLFFBQUEscUJBQXFCLHlCQXFGaEMifQ==