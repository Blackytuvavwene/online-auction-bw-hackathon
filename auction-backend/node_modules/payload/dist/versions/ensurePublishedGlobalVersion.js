"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensurePublishedGlobalVersion = void 0;
const enforceMaxVersions_1 = require("./enforceMaxVersions");
const afterRead_1 = require("../fields/hooks/afterRead");
const ensurePublishedGlobalVersion = async ({ payload, config, req, docWithLocales, }) => {
    // If there are no newer drafts,
    // And the current doc is published,
    // We need to keep a version of the published document
    if ((docWithLocales === null || docWithLocales === void 0 ? void 0 : docWithLocales._status) === 'published') {
        const VersionModel = payload.versions[config.slug];
        const moreRecentDrafts = await VersionModel.find({
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
        if ((moreRecentDrafts === null || moreRecentDrafts === void 0 ? void 0 : moreRecentDrafts.length) === 0) {
            const version = await (0, afterRead_1.afterRead)({
                depth: 0,
                doc: docWithLocales,
                entityConfig: config,
                req,
                overrideAccess: true,
                showHiddenFields: true,
            });
            try {
                await VersionModel.create({
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
        }
    }
};
exports.ensurePublishedGlobalVersion = ensurePublishedGlobalVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5zdXJlUHVibGlzaGVkR2xvYmFsVmVyc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9lbnN1cmVQdWJsaXNoZWRHbG9iYWxWZXJzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZEQUEwRDtBQUcxRCx5REFBc0Q7QUFTL0MsTUFBTSw0QkFBNEIsR0FBRyxLQUFLLEVBQUUsRUFDakQsT0FBTyxFQUNQLE1BQU0sRUFDTixHQUFHLEVBQ0gsY0FBYyxHQUNULEVBQWlCLEVBQUU7SUFDeEIsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxzREFBc0Q7SUFFdEQsSUFBSSxDQUFBLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxPQUFPLE1BQUssV0FBVyxFQUFFO1FBQzNDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQy9DLFNBQVMsRUFBRTtnQkFDVCxHQUFHLEVBQUUsY0FBYyxDQUFDLFNBQVM7YUFDOUI7U0FDRixFQUNELEVBQUUsRUFDRjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxNQUFNO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFBLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLE1BQU0sTUFBSyxDQUFDLEVBQUU7WUFDbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLHFCQUFTLEVBQUM7Z0JBQzlCLEtBQUssRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxjQUFjO2dCQUNuQixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsR0FBRztnQkFDSCxjQUFjLEVBQUUsSUFBSTtnQkFDcEIsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDLENBQUM7WUFFSCxJQUFJO2dCQUNGLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQztvQkFDeEIsT0FBTztvQkFDUCxRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw0REFBNEQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2xHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDdkIsSUFBQSx1Q0FBa0IsRUFBQztvQkFDakIsT0FBTyxFQUFFLElBQUk7b0JBQ2IsS0FBSyxFQUFFLFlBQVk7b0JBQ25CLFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSztvQkFDekIsVUFBVSxFQUFFLFFBQVE7b0JBQ3BCLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7aUJBQ3pCLENBQUMsQ0FBQzthQUNKO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQTFEVyxRQUFBLDRCQUE0QixnQ0EwRHZDIn0=