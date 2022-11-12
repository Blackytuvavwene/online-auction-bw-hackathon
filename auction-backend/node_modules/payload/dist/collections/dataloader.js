"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataLoader = void 0;
const dataloader_1 = __importDefault(require("dataloader"));
const isValidID_1 = require("../utilities/isValidID");
const getIDType_1 = require("../utilities/getIDType");
const types_1 = require("../fields/config/types");
// Payload uses `dataloader` to solve the classic GraphQL N+1 problem.
// We keep a list of all documents requested to be populated for any given request
// and then batch together documents within the same collection,
// making only 1 find per each collection, rather than `findByID` per each requested doc.
// This dramatically improves performance for REST and Local API `depth` populations,
// and also ensures complex GraphQL queries perform lightning-fast.
const batchAndLoadDocs = (req) => async (keys) => {
    const { payload } = req;
    // Create docs array of same length as keys, using null as value
    // We will replace nulls with injected docs as they are retrieved
    const docs = keys.map(() => null);
    // Batch IDs by their `find` args
    // so we can make one find query per combination of collection, depth, locale, and fallbackLocale.
    // Resulting shape will be as follows:
    // {
    //   // key is stringified set of find args
    //   '["pages",2,0,"es","en",false,false]': [
    //     // value is array of IDs to find with these args
    //     'q34tl23462346234524',
    //     '435523540194324280',
    //     '2346245j35l3j5234532li',
    //   ],
    //   // etc
    // };
    const batchByFindArgs = keys.reduce((batches, key) => {
        var _a;
        const [collection, id, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields] = JSON.parse(key);
        const batchKeyArray = [
            collection,
            depth,
            currentDepth,
            locale,
            fallbackLocale,
            overrideAccess,
            showHiddenFields,
        ];
        const batchKey = JSON.stringify(batchKeyArray);
        const idField = (_a = payload.collections) === null || _a === void 0 ? void 0 : _a[collection].config.fields.find((field) => (0, types_1.fieldAffectsData)(field) && field.name === 'id');
        if ((0, isValidID_1.isValidID)(id, (0, getIDType_1.getIDType)(idField))) {
            return {
                ...batches,
                [batchKey]: [
                    ...batches[batchKey] || [],
                    id,
                ],
            };
        }
        return batches;
    }, {});
    // Run find requests in parallel
    const results = Object.entries(batchByFindArgs).map(async ([batchKey, ids]) => {
        const [collection, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields] = JSON.parse(batchKey);
        const result = await payload.find({
            collection,
            locale,
            fallbackLocale,
            depth,
            currentDepth,
            pagination: false,
            where: {
                id: {
                    in: ids,
                },
            },
            overrideAccess: Boolean(overrideAccess),
            showHiddenFields: Boolean(showHiddenFields),
            disableErrors: true,
            req,
        });
        // For each returned doc, find index in original keys
        // Inject doc within docs array if index exists
        result.docs.forEach((doc) => {
            const docKey = JSON.stringify([collection, doc.id, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields]);
            const docsIndex = keys.findIndex((key) => key === docKey);
            if (docsIndex > -1) {
                docs[docsIndex] = doc;
            }
        });
    });
    await Promise.all(results);
    // Return docs array,
    // which has now been injected with all fetched docs
    // and should match the length of the incoming keys arg
    return docs;
};
const getDataLoader = (req) => new dataloader_1.default(batchAndLoadDocs(req));
exports.getDataLoader = getDataLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9kYXRhbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDREQUFxRDtBQUdyRCxzREFBbUQ7QUFDbkQsc0RBQW1EO0FBQ25ELGtEQUEwRDtBQUUxRCxzRUFBc0U7QUFFdEUsa0ZBQWtGO0FBQ2xGLGdFQUFnRTtBQUNoRSx5RkFBeUY7QUFFekYscUZBQXFGO0FBQ3JGLG1FQUFtRTtBQUVuRSxNQUFNLGdCQUFnQixHQUFHLENBQUMsR0FBbUIsRUFBbUMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFjLEVBQXlCLEVBQUU7SUFDakksTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUV4QixnRUFBZ0U7SUFDaEUsaUVBQWlFO0lBQ2pFLE1BQU0sSUFBSSxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpELGlDQUFpQztJQUNqQyxrR0FBa0c7SUFFbEcsc0NBQXNDO0lBRXRDLElBQUk7SUFDSiwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLHVEQUF1RDtJQUN2RCw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxPQUFPO0lBQ1AsV0FBVztJQUNYLEtBQUs7SUFFTCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFOztRQUNuRCxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4SCxNQUFNLGFBQWEsR0FBRztZQUNwQixVQUFVO1lBQ1YsS0FBSztZQUNMLFlBQVk7WUFDWixNQUFNO1lBQ04sY0FBYztZQUNkLGNBQWM7WUFDZCxnQkFBZ0I7U0FDakIsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0MsTUFBTSxPQUFPLEdBQUcsTUFBQSxPQUFPLENBQUMsV0FBVywwQ0FBRyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsd0JBQWdCLEVBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVoSSxJQUFJLElBQUEscUJBQVMsRUFBQyxFQUFFLEVBQUUsSUFBQSxxQkFBUyxFQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDckMsT0FBTztnQkFDTCxHQUFHLE9BQU87Z0JBQ1YsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDVixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUMxQixFQUFFO2lCQUNIO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsZ0NBQWdDO0lBRWhDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1FBQzVFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekgsTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFVBQVU7WUFDVixNQUFNO1lBQ04sY0FBYztZQUNkLEtBQUs7WUFDTCxZQUFZO1lBQ1osVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRTtvQkFDRixFQUFFLEVBQUUsR0FBRztpQkFDUjthQUNGO1lBQ0QsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDdkMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQzNDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEdBQUc7U0FDSixDQUFDLENBQUM7UUFFSCxxREFBcUQ7UUFDckQsK0NBQStDO1FBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ25JLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQztZQUUxRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUN2QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFM0IscUJBQXFCO0lBQ3JCLG9EQUFvRDtJQUNwRCx1REFBdUQ7SUFDdkQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFSyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksb0JBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQS9FLFFBQUEsYUFBYSxpQkFBa0UifQ==