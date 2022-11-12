"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../types");
const auth_1 = require("../../auth");
const flattenWhereConstraints_1 = __importDefault(require("../../utilities/flattenWhereConstraints"));
const sanitizeInternalFields_1 = __importDefault(require("../../utilities/sanitizeInternalFields"));
const appendVersionToQueryKey_1 = require("./appendVersionToQueryKey");
const replaceWithDraftIfAvailable = async ({ payload, entity, entityType, doc, locale, accessResult, }) => {
    const VersionModel = payload.versions[entity.slug];
    let useEstimatedCount = false;
    const queryToBuild = {
        where: {
            and: [
                {
                    'version._status': {
                        equals: 'draft',
                    },
                },
            ],
        },
    };
    if (entityType === 'collection') {
        queryToBuild.where.and.push({
            parent: {
                equals: doc.id,
            },
        });
    }
    if ((0, types_1.docHasTimestamps)(doc)) {
        queryToBuild.where.and.push({
            updatedAt: {
                greater_than: doc.updatedAt,
            },
        });
    }
    if ((0, auth_1.hasWhereAccessResult)(accessResult)) {
        const versionAccessResult = (0, appendVersionToQueryKey_1.appendVersionToQueryKey)(accessResult);
        queryToBuild.where.and.push(versionAccessResult);
    }
    const constraints = (0, flattenWhereConstraints_1.default)(queryToBuild);
    useEstimatedCount = constraints.some((prop) => Object.keys(prop).some((key) => key === 'near'));
    const query = await VersionModel.buildQuery(queryToBuild, locale);
    let draft = await VersionModel.findOne(query, {}, {
        lean: true,
        useEstimatedCount,
        sort: { updatedAt: 'desc' },
    });
    if (!draft) {
        return doc;
    }
    draft = JSON.parse(JSON.stringify(draft));
    draft = (0, sanitizeInternalFields_1.default)(draft);
    // Disregard all other draft content at this point,
    // Only interested in the version itself.
    // Operations will handle firing hooks, etc.
    return {
        id: doc.id,
        ...draft.version,
        createdAt: draft.createdAt,
        updatedAt: draft.updatedAt,
    };
};
exports.default = replaceWithDraftIfAvailable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZlcnNpb25zL2RyYWZ0cy9yZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx1Q0FBc0Q7QUFDdEQscUNBQWtEO0FBR2xELHNHQUE4RTtBQUM5RSxvR0FBNEU7QUFDNUUsdUVBQW9FO0FBWXBFLE1BQU0sMkJBQTJCLEdBQUcsS0FBSyxFQUF3QixFQUMvRCxPQUFPLEVBQ1AsTUFBTSxFQUNOLFVBQVUsRUFDVixHQUFHLEVBQ0gsTUFBTSxFQUNOLFlBQVksR0FDQyxFQUFjLEVBQUU7SUFDN0IsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFvQixDQUFDO0lBRXRFLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBRTlCLE1BQU0sWUFBWSxHQUFxQjtRQUNyQyxLQUFLLEVBQUU7WUFDTCxHQUFHLEVBQUU7Z0JBQ0g7b0JBQ0UsaUJBQWlCLEVBQUU7d0JBQ2pCLE1BQU0sRUFBRSxPQUFPO3FCQUNoQjtpQkFDRjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRUYsSUFBSSxVQUFVLEtBQUssWUFBWSxFQUFFO1FBQy9CLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUMxQixNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2FBQ2Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVELElBQUksSUFBQSx3QkFBZ0IsRUFBQyxHQUFHLENBQUMsRUFBRTtRQUN6QixZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsU0FBUyxFQUFFO2dCQUNULFlBQVksRUFBRSxHQUFHLENBQUMsU0FBUzthQUM1QjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxJQUFBLDJCQUFvQixFQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQUcsSUFBQSxpREFBdUIsRUFBQyxZQUFZLENBQUMsQ0FBQztRQUNsRSxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUNsRDtJQUVELE1BQU0sV0FBVyxHQUFHLElBQUEsaUNBQXVCLEVBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUQsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLE1BQU0sS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFbEUsSUFBSSxLQUFLLEdBQUcsTUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7UUFDaEQsSUFBSSxFQUFFLElBQUk7UUFDVixpQkFBaUI7UUFDakIsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUM1QixDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQyxLQUFLLEdBQUcsSUFBQSxnQ0FBc0IsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUV0QyxtREFBbUQ7SUFDbkQseUNBQXlDO0lBQ3pDLDRDQUE0QztJQUM1QyxPQUFPO1FBQ0wsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsR0FBRyxLQUFLLENBQUMsT0FBTztRQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO0tBQzNCLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSwyQkFBMkIsQ0FBQyJ9