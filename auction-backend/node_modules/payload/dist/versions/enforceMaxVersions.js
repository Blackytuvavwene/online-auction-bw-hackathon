"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enforceMaxVersions = void 0;
const enforceMaxVersions = async ({ payload, Model, max, entityLabel, entityType, id, }) => {
    var _a;
    try {
        const query = {};
        if (id)
            query.parent = id;
        const oldestAllowedDoc = await Model.find(query).limit(1).skip(max).sort({ createdAt: -1 });
        if ((_a = oldestAllowedDoc === null || oldestAllowedDoc === void 0 ? void 0 : oldestAllowedDoc[0]) === null || _a === void 0 ? void 0 : _a.createdAt) {
            const deleteLessThan = oldestAllowedDoc[0].createdAt;
            await Model.deleteMany({
                createdAt: {
                    $lte: deleteLessThan,
                },
            });
        }
    }
    catch (err) {
        payload.logger.error(`There was an error cleaning up old versions for the ${entityType} ${entityLabel}`);
    }
};
exports.enforceMaxVersions = enforceMaxVersions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5mb3JjZU1heFZlcnNpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZlcnNpb25zL2VuZm9yY2VNYXhWZXJzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFZTyxNQUFNLGtCQUFrQixHQUFHLEtBQUssRUFBRSxFQUN2QyxPQUFPLEVBQ1AsS0FBSyxFQUNMLEdBQUcsRUFDSCxXQUFXLEVBQ1gsVUFBVSxFQUNWLEVBQUUsR0FDRyxFQUFpQixFQUFFOztJQUN4QixJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQWlDLEVBQUUsQ0FBQztRQUUvQyxJQUFJLEVBQUU7WUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUUxQixNQUFNLGdCQUFnQixHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFNUYsSUFBSSxNQUFBLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFHLENBQUMsQ0FBQywwQ0FBRSxTQUFTLEVBQUU7WUFDcEMsTUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBRXJELE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDckIsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxjQUFjO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxVQUFVLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztLQUMxRztBQUNILENBQUMsQ0FBQztBQTNCVyxRQUFBLGtCQUFrQixzQkEyQjdCIn0=