"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.populate = void 0;
const populate = async ({ id, collection, data, key, overrideAccess, depth, currentDepth, req, showHiddenFields, }) => {
    const dataRef = data;
    const doc = await req.payload.findByID({
        req,
        collection: collection.config.slug,
        id,
        currentDepth: currentDepth + 1,
        overrideAccess: typeof overrideAccess === 'undefined' ? false : overrideAccess,
        disableErrors: true,
        depth,
        showHiddenFields,
    });
    if (doc) {
        dataRef[key] = doc;
    }
    else {
        dataRef[key] = null;
    }
};
exports.populate = populate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdWxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZmllbGRzL3JpY2hUZXh0L3BvcHVsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWdCTyxNQUFNLFFBQVEsR0FBRyxLQUFLLEVBQUUsRUFDN0IsRUFBRSxFQUNGLFVBQVUsRUFDVixJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsRUFDZCxLQUFLLEVBQ0wsWUFBWSxFQUNaLEdBQUcsRUFDSCxnQkFBZ0IsR0FLakIsRUFBaUIsRUFBRTtJQUNsQixNQUFNLE9BQU8sR0FBRyxJQUErQixDQUFDO0lBRWhELE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDckMsR0FBRztRQUNILFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDbEMsRUFBRTtRQUNGLFlBQVksRUFBRSxZQUFZLEdBQUcsQ0FBQztRQUM5QixjQUFjLEVBQUUsT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWM7UUFDOUUsYUFBYSxFQUFFLElBQUk7UUFDbkIsS0FBSztRQUNMLGdCQUFnQjtLQUNqQixDQUFDLENBQUM7SUFFSCxJQUFJLEdBQUcsRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDcEI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUFqQ1csUUFBQSxRQUFRLFlBaUNuQiJ9