"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../auth");
const executeAccess_1 = __importDefault(require("../../auth/executeAccess"));
const sanitizeInternalFields_1 = __importDefault(require("../../utilities/sanitizeInternalFields"));
const replaceWithDraftIfAvailable_1 = __importDefault(require("../../versions/drafts/replaceWithDraftIfAvailable"));
const afterRead_1 = require("../../fields/hooks/afterRead");
async function findOne(args) {
    var _a;
    const { globalConfig, locale, req, req: { payload, }, slug, depth, showHiddenFields, draft: draftEnabled = false, overrideAccess = false, } = args;
    const { globals: { Model } } = payload;
    // /////////////////////////////////////
    // Retrieve and execute access
    // /////////////////////////////////////
    const queryToBuild = {
        where: {
            and: [
                {
                    globalType: {
                        equals: slug,
                    },
                },
            ],
        },
    };
    let accessResult;
    if (!overrideAccess) {
        accessResult = await (0, executeAccess_1.default)({ req }, globalConfig.access.read);
        if ((0, auth_1.hasWhereAccessResult)(accessResult)) {
            queryToBuild.where.and.push(accessResult);
        }
    }
    const query = await Model.buildQuery(queryToBuild, locale);
    // /////////////////////////////////////
    // Perform database operation
    // /////////////////////////////////////
    let doc = await Model.findOne(query).lean();
    if (!doc) {
        doc = {};
    }
    else if (doc._id) {
        doc.id = doc._id;
        delete doc._id;
    }
    doc = JSON.stringify(doc);
    doc = JSON.parse(doc);
    doc = (0, sanitizeInternalFields_1.default)(doc);
    // /////////////////////////////////////
    // Replace document with draft if available
    // /////////////////////////////////////
    if (((_a = globalConfig.versions) === null || _a === void 0 ? void 0 : _a.drafts) && draftEnabled) {
        doc = await (0, replaceWithDraftIfAvailable_1.default)({
            payload,
            entity: globalConfig,
            entityType: 'global',
            doc,
            locale,
            accessResult,
        });
    }
    // /////////////////////////////////////
    // Execute before global hook
    // /////////////////////////////////////
    await globalConfig.hooks.beforeRead.reduce(async (priorHook, hook) => {
        await priorHook;
        doc = await hook({
            req,
            doc,
        }) || doc;
    }, Promise.resolve());
    // /////////////////////////////////////
    // Execute field-level hooks and access
    // /////////////////////////////////////
    doc = await (0, afterRead_1.afterRead)({
        depth,
        doc,
        entityConfig: globalConfig,
        req,
        overrideAccess,
        showHiddenFields,
    });
    // /////////////////////////////////////
    // Execute after global hook
    // /////////////////////////////////////
    await globalConfig.hooks.afterRead.reduce(async (priorHook, hook) => {
        await priorHook;
        doc = await hook({
            req,
            doc,
        }) || doc;
    }, Promise.resolve());
    // /////////////////////////////////////
    // Return results
    // /////////////////////////////////////
    return doc;
}
exports.default = findOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZE9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvZmluZE9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrRDtBQUNsRCw2RUFBcUQ7QUFHckQsb0dBQTRFO0FBQzVFLG9IQUE0RjtBQUM1Riw0REFBeUQ7QUFlekQsS0FBSyxVQUFVLE9BQU8sQ0FBNkIsSUFBVTs7SUFDM0QsTUFBTSxFQUNKLFlBQVksRUFDWixNQUFNLEVBQ04sR0FBRyxFQUNILEdBQUcsRUFBRSxFQUNILE9BQU8sR0FDUixFQUNELElBQUksRUFDSixLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLEtBQUssRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUMzQixjQUFjLEdBQUcsS0FBSyxHQUN2QixHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUV2Qyx3Q0FBd0M7SUFDeEMsOEJBQThCO0lBQzlCLHdDQUF3QztJQUV4QyxNQUFNLFlBQVksR0FBc0I7UUFDdEMsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFO2dCQUNIO29CQUNFLFVBQVUsRUFBRTt3QkFDVixNQUFNLEVBQUUsSUFBSTtxQkFDYjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRUYsSUFBSSxZQUEwQixDQUFDO0lBRS9CLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsWUFBWSxHQUFHLE1BQU0sSUFBQSx1QkFBYSxFQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RSxJQUFJLElBQUEsMkJBQW9CLEVBQUMsWUFBWSxDQUFDLEVBQUU7WUFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO0tBQ0Y7SUFFRCxNQUFNLEtB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