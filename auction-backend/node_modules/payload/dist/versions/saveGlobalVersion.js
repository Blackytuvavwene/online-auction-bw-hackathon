"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveGlobalVersion = void 0;
const enforceMaxVersions_1 = require("./enforceMaxVersions");
const sanitizeInternalFields_1 = __importDefault(require("../utilities/sanitizeInternalFields"));
const afterRead_1 = require("../fields/hooks/afterRead");
const saveGlobalVersion = async ({ payload, config, req, docWithLocales, }) => {
    var _a, _b;
    const VersionModel = payload.versions[config.slug];
    let version = docWithLocales;
    if ((_a = config.versions) === null || _a === void 0 ? void 0 : _a.drafts) {
        const latestVersion = await VersionModel.findOne({
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
        flattenLocales: false,
        overrideAccess: true,
        req,
        showHiddenFields: true,
    });
    if (version._id)
        delete version._id;
    let createdVersion;
    try {
        createdVersion = await VersionModel.create({
            version,
            autosave: false,
        });
    }
    catch (err) {
        payload.logger.error(`There was an error while saving a version for the Global ${config.label}.`);
        payload.logger.error(err);
    }
    if (config.versions.max) {
        (0, enforceMaxVersions_1.enforceMaxVersions)({
            payload: this,
            Model: VersionModel,
            entityLabel: config.label,
            entityType: 'global',
            max: config.versions.max,
        });
    }
    if (createdVersion) {
        createdVersion = JSON.parse(JSON.stringify(createdVersion));
        createdVersion = (0, sanitizeInternalFields_1.default)(createdVersion);
    }
    return createdVersion;
};
exports.saveGlobalVersion = saveGlobalVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUdsb2JhbFZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmVyc2lvbnMvc2F2ZUdsb2JhbFZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsNkRBQTBEO0FBRzFELGlHQUF5RTtBQUN6RSx5REFBc0Q7QUFTL0MsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQUUsRUFDdEMsT0FBTyxFQUNQLE1BQU0sRUFDTixHQUFHLEVBQ0gsY0FBYyxHQUNULEVBQWlCLEVBQUU7O0lBQ3hCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5ELElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQztJQUU3QixJQUFJLE1BQUEsTUFBTSxDQUFDLFFBQVEsMENBQUUsTUFBTSxFQUFFO1FBQzNCLE1BQU0sYUFBYSxHQUFHLE1BQU0sWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUMvQyxTQUFTLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLGNBQWMsQ0FBQyxTQUFTO2FBQzlCO1NBQ0YsRUFDRCxFQUFFLEVBQ0Y7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsTUFBTTthQUNsQjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksYUFBYSxFQUFFO1lBQ2pCLDBEQUEwRDtZQUMxRCw0RUFBNEU7WUFDNUUsdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQSxNQUFBLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxPQUFPLDBDQUFFLE9BQU8sTUFBSyxPQUFPLEVBQUU7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLElBQUEsZ0NBQXNCLEVBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7S0FDRjtJQUVELE9BQU8sR0FBRyxNQUFNLElBQUEscUJBQVMsRUFBQztRQUN4QixLQUFLLEVBQUUsQ0FBQztRQUNSLEdBQUcsRUFBRSxPQUFPO1FBQ1osWUFBWSxFQUFFLE1BQU07UUFDcEIsY0FBYyxFQUFFLEtBQUs7UUFDckIsY0FBYyxFQUFFLElBQUk7UUFDcEIsR0FBRztRQUNILGdCQUFnQixFQUFFLElBQUk7S0FDdkIsQ0FBQyxDQUFDO0lBRUgsSUFBSSxPQUFPLENBQUMsR0FBRztRQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUVwQyxJQUFJLGNBQWMsQ0FBQztJQUVuQixJQUFJO1FBQ0YsY0FBYyxHQUFHLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN6QyxPQUFPO1lBQ1AsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDREQUE0RCxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNsRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDdkIsSUFBQSx1Q0FBa0IsRUFBQztZQUNqQixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxZQUFZO1lBQ25CLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSztZQUN6QixVQUFVLEVBQUUsUUFBUTtZQUNwQixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHO1NBQ3pCLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxjQUFjLEVBQUU7UUFDbEIsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzVELGNBQWMsR0FBRyxJQUFBLGdDQUFzQixFQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3pEO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBL0VXLFFBQUEsaUJBQWlCLHFCQStFNUIifQ==