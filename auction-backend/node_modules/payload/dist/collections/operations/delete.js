"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sanitizeInternalFields_1 = __importDefault(require("../../utilities/sanitizeInternalFields"));
const errors_1 = require("../../errors");
const executeAccess_1 = __importDefault(require("../../auth/executeAccess"));
const types_1 = require("../../auth/types");
const fileExists_1 = __importDefault(require("../../uploads/fileExists"));
const afterRead_1 = require("../../fields/hooks/afterRead");
async function deleteOperation(incomingArgs) {
    let args = incomingArgs;
    // /////////////////////////////////////
    // beforeOperation - Collection
    // /////////////////////////////////////
    await args.collection.config.hooks.beforeOperation.reduce(async (priorHook, hook) => {
        await priorHook;
        args = (await hook({
            args,
            operation: 'delete',
        })) || args;
    }, Promise.resolve());
    const { depth, collection: { Model, config: collectionConfig, }, id, req, req: { locale, payload: { config, preferences, }, }, overrideAccess, showHiddenFields, } = args;
    // /////////////////////////////////////
    // Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, executeAccess_1.default)({ req, id }, collectionConfig.access.delete) : true;
    const hasWhereAccess = (0, types_1.hasWhereAccessResult)(accessResults);
    // /////////////////////////////////////
    // beforeDelete - Collection
    // /////////////////////////////////////
    await collectionConfig.hooks.beforeDelete.reduce(async (priorHook, hook) => {
        await priorHook;
        return hook({
            req,
            id,
        });
    }, Promise.resolve());
    // /////////////////////////////////////
    // Retrieve document
    // /////////////////////////////////////
    const queryToBuild = {
        where: {
            and: [
                {
                    id: {
                        equals: id,
                    },
                },
            ],
        },
    };
    if ((0, types_1.hasWhereAccessResult)(accessResults)) {
        queryToBuild.where.and.push(accessResults);
    }
    const query = await Model.buildQuery(queryToBuild, locale);
    const docToDelete = await Model.findOne(query);
    if (!docToDelete && !hasWhereAccess)
        throw new errors_1.NotFound();
    if (!docToDelete && hasWhereAccess)
        throw new errors_1.Forbidden();
    const resultToDelete = docToDelete.toJSON({ virtuals: true });
    // /////////////////////////////////////
    // Delete any associated files
    // /////////////////////////////////////
    if (collectionConfig.upload) {
        const { staticDir } = collectionConfig.upload;
        const staticPath = path_1.default.resolve(config.paths.configDir, staticDir);
        const fileToDelete = `${staticPath}/${resultToDelete.filename}`;
        if (await (0, fileExists_1.default)(fileToDelete)) {
            fs_1.default.unlink(fileToDelete, (err) => {
                if (err) {
                    throw new errors_1.ErrorDeletingFile();
                }
            });
        }
        if (resultToDelete.sizes) {
            Object.values(resultToDelete.sizes).forEach(async (size) => {
                const sizeToDelete = `${staticPath}/${size.filename}`;
                if (await (0, fileExists_1.default)(sizeToDelete)) {
                    fs_1.default.unlink(sizeToDelete, (err) => {
                        if (err) {
                            throw new errors_1.ErrorDeletingFile();
                        }
                    });
                }
            });
        }
    }
    // /////////////////////////////////////
    // Delete document
    // /////////////////////////////////////
    const doc = await Model.findOneAndDelete({ _id: id });
    let result = doc.toJSON({ virtuals: true });
    // custom id type reset
    result.id = result._id;
    result = JSON.stringify(result);
    result = JSON.parse(result);
    result = (0, sanitizeInternalFields_1.default)(result);
    // /////////////////////////////////////
    // Delete Preferences
    // /////////////////////////////////////
    if (collectionConfig.auth) {
        await preferences.Model.deleteMany({ user: id, userCollection: collectionConfig.slug });
    }
    await preferences.Model.deleteMany({ key: `collection-${collectionConfig.slug}-${id}` });
    // /////////////////////////////////////
    // afterDelete - Collection
    // /////////////////////////////////////
    await collectionConfig.hooks.afterDelete.reduce(async (priorHook, hook) => {
        await priorHook;
        result = await hook({ req, id, doc: result }) || result;
    }, Promise.resolve());
    // /////////////////////////////////////
    // afterRead - Fields
    // /////////////////////////////////////
    result = await (0, afterRead_1.afterRead)({
        depth,
        doc: result,
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
        result = await hook({
            req,
            doc: result,
        }) || result;
    }, Promise.resolve());
    // /////////////////////////////////////
    // 8. Return results
    // /////////////////////////////////////
    return result;
}
exports.default = deleteOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvZGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUd4QixvR0FBNEU7QUFDNUUseUNBQXNFO0FBQ3RFLDZFQUFxRDtBQUdyRCw0Q0FBd0Q7QUFFeEQsMEVBQWtEO0FBQ2xELDREQUF5RDtBQVd6RCxLQUFLLFVBQVUsZUFBZSxDQUFDLFlBQXVCO0lBQ3BELElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQztJQUV4Qix3Q0FBd0M7SUFDeEMsK0JBQStCO0lBQy9CLHdDQUF3QztJQUV4QyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUE4QyxFQUFFLElBQXlCLEVBQUUsRUFBRTtRQUM1SSxNQUFNLFNBQVMsQ0FBQztRQUVoQixJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUNqQixJQUFJO1lBQ0osU0FBUyxFQUFFLFFBQVE7U0FDcEIsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLE1BQU0sRUFDSixLQUFLLEVBQ0wsVUFBVSxFQUFFLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFBRSxnQkFBZ0IsR0FDekIsRUFDRCxFQUFFLEVBQ0YsR0FBRyxFQUNILEdBQUcsRUFBRSxFQUNILE1BQU0sRUFDTixPQUFPLEVBQUUsRUFDUCxNQUFNLEVBQ04sV0FBVyxHQUNaLEdBQ0YsRUFDRCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLEdBQUcsSUFBSSxDQUFDO0lBRVQsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCx3Q0FBd0M7SUFFeEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFD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