"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
const http_status_1 = __importDefault(require("http-status"));
const sanitizeInternalFields_1 = __importDefault(require("../../utilities/sanitizeInternalFields"));
const errors_1 = require("../../errors");
const executeAccess_1 = __importDefault(require("../../auth/executeAccess"));
const types_1 = require("../../auth/types");
const afterRead_1 = require("../../fields/hooks/afterRead");
async function findVersionByID(args) {
    const { depth, collection: { config: collectionConfig, }, id, req, req: { locale, payload, }, disableErrors, currentDepth, overrideAccess, showHiddenFields, } = args;
    if (!id) {
        throw new errors_1.APIError('Missing ID of version.', http_status_1.default.BAD_REQUEST);
    }
    const VersionsModel = (payload.versions[collectionConfig.slug]);
    // /////////////////////////////////////
    // Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, executeAccess_1.default)({ req, disableErrors, id }, collectionConfig.access.readVersions) : true;
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
    await collectionConfig.hooks.beforeRead.reduce(async (priorHook, hook) => {
        await priorHook;
        result.version = await hook({
            req,
            query,
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
        entityConfig: collectionConfig,
        overrideAccess,
        req,
        showHiddenFields,
    });
    // /////////////////////////////////////
    // afterRead - Collection
    // /////////////////////////////////////
    await collectionConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZFZlcnNpb25CeUlELmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLDhEQUFxQztBQUdyQyxvR0FBNEU7QUFDNUUseUNBQTZEO0FBQzdELDZFQUFxRDtBQUVyRCw0Q0FBd0Q7QUFFeEQsNERBQXlEO0FBYXpELEtBQUssVUFBVSxlQUFlLENBQXFDLElBQWU7SUFDaEYsTUFBTSxFQUNKLEtBQUssRUFDTCxVQUFVLEVBQUUsRUFDVixNQUFNLEVBQUUsZ0JBQWdCLEdBQ3pCLEVBQ0QsRUFBRSxFQUNGLEdBQUcsRUFDSCxHQUFHLEVBQUUsRUFDSCxNQUFNLEVBQ04sT0FBTyxHQUNSLEVBQ0QsYUFBYSxFQUNiLFlBQVksRUFDWixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLEdBQUcsSUFBSSxDQUFDO0lBRVQsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNQLE1BQU0sSUFBSSxpQkFBUSxDQUFDLHdCQUF3QixFQUFFLHFCQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdEU7SUFFRCxNQUFNLGFBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQW9CLENBQUM7SUFFbkYsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCx3Q0FBd0M7SUFFeEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBQSx1QkFBYSxFQUFDLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUVySSxnRUFBZ0U7SUFDaEUsSUFBSSxhQUFhLEtBQUssS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXpD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