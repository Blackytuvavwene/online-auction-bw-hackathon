"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeInternalFields_1 = __importDefault(require("../../utilities/sanitizeInternalFields"));
const errors_1 = require("../../errors");
const executeAccess_1 = __importDefault(require("../../auth/executeAccess"));
const types_1 = require("../../auth/types");
const afterRead_1 = require("../../fields/hooks/afterRead");
async function findVersionByID(args) {
    const { depth, globalConfig, id, req, req: { payload, locale, }, disableErrors, currentDepth, overrideAccess, showHiddenFields, } = args;
    const VersionsModel = payload.versions[globalConfig.slug];
    // /////////////////////////////////////
    // Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, executeAccess_1.default)({ req, disableErrors, id }, globalConfig.access.readVersions) : true;
    // If errors are disabled, and access returns false, return null
    if (accessResults === false)
        return null;
    const hasWhereAccess = typeof accessResults === 'object';
    const queryToBuild = {
        where: {
            and: [
                {
                    _id: {
                        equals: id,
                    },
                },
            ],
        },
    };
    if ((0, types_1.hasWhereAccessResult)(accessResults)) {
        queryToBuild.where.and.push(accessResults);
    }
    const query = await VersionsModel.buildQuery(queryToBuild, locale);
    // /////////////////////////////////////
    // Find by ID
    // /////////////////////////////////////
    if (!query.$and[0]._id)
        throw new errors_1.NotFound();
    let result = await VersionsModel.findOne(query, {}).lean();
    if (!result) {
        if (!disableErrors) {
            if (!hasWhereAccess)
                throw new errors_1.NotFound();
            if (hasWhereAccess)
                throw new errors_1.Forbidden();
        }
        return null;
    }
    // Clone the result - it may have come back memoized
    result = JSON.parse(JSON.stringify(result));
    result = (0, sanitizeInternalFields_1.default)(result);
    // /////////////////////////////////////
    // beforeRead - Collection
    // /////////////////////////////////////
    await globalConfig.hooks.beforeRead.reduce(async (priorHook, hook) => {
        await priorHook;
        result.version = await hook({
            req,
            doc: result.version,
        }) || result.version;
    }, Promise.resolve());
    // /////////////////////////////////////
    // afterRead - Fields
    // /////////////////////////////////////
    result.version = await (0, afterRead_1.afterRead)({
        currentDepth,
        depth,
        doc: result.version,
        entityConfig: globalConfig,
        req,
        overrideAccess,
        showHiddenFields,
    });
    // /////////////////////////////////////
    // afterRead - Global
    // /////////////////////////////////////
    await globalConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
        await priorHook;
        result.version = await hook({
            req,
            query,
            doc: result.version,
        }) || result.version;
    }, Promise.resolve());
    // /////////////////////////////////////
    // Return results
    // /////////////////////////////////////
    return result;
}
exports.default = findVersionByID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFZlcnNpb25CeUlELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dsb2JhbHMvb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxvR0FBNEU7QUFDNUUseUNBQW1EO0FBQ25ELDZFQUFxRDtBQUVyRCw0Q0FBd0Q7QUFHeEQsNERBQXlEO0FBYXpELEtBQUssVUFBVSxlQUFlLENBQXFDLElBQWU7SUFDaEYsTUFBTSxFQUNKLEtBQUssRUFDTCxZQUFZLEVBQ1osRUFBRSxFQUNGLEdBQUcsRUFDSCxHQUFHLEVBQUUsRUFDSCxPQUFPLEVBQ1AsTUFBTSxHQUNQLEVBQ0QsYUFBYSxFQUNiLFlBQVksRUFDWixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLEdBQUcsSUFBSSxDQUFDO0lBRVQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFMUQsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCx3Q0FBd0M7SUFFeEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBQSx1QkFBYSxFQUFDLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFakksZ0VBQWdFO0lBQ2hFLElBQUksYUFBYSxLQUFLLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQztJQUV6QyxNQUFNLGNBQWMsR0FBRyxPQUFPLGFBQWEsS0FBSyxRQUFRLENBQUM7SUFFekQsTUFBTSxZQUFZLEdBQXFCO1FBQ3JDLEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRTtnQkFDSDtvQkFDRSxHQUFHLEVBQUU7d0JBQ0gsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUVG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