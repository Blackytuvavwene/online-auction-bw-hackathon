"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterRead = void 0;
const traverseFields_1 = require("./traverseFields");
const deepCopyObject_1 = __importDefault(require("../../../utilities/deepCopyObject"));
async function afterRead(args) {
    const { currentDepth: incomingCurrentDepth, depth: incomingDepth, doc: incomingDoc, entityConfig, findMany, flattenLocales = true, req, overrideAccess, showHiddenFields, } = args;
    const doc = (0, deepCopyObject_1.default)(incomingDoc);
    const fieldPromises = [];
    const populationPromises = [];
    let depth = 0;
    if (req.payloadAPI === 'REST' || req.payloadAPI === 'local') {
        depth = (incomingDepth || incomingDepth === 0) ? parseInt(String(incomingDepth), 10) : req.payload.config.defaultDepth;
        if (depth > req.payload.config.maxDepth)
            depth = req.payload.config.maxDepth;
    }
    const currentDepth = incomingCurrentDepth || 1;
    (0, traverseFields_1.traverseFields)({
        currentDepth,
        depth,
        doc,
        fields: entityConfig.fields,
        fieldPromises,
        findMany,
        flattenLocales,
        overrideAccess,
        populationPromises,
        req,
        siblingDoc: doc,
        showHiddenFields,
    });
    await Promise.all(fieldPromises);
    await Promise.all(populationPromises);
    return doc;
}
exports.afterRead = afterRead;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2FmdGVyUmVhZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxxREFBa0Q7QUFDbEQsdUZBQStEO0FBY3hELEtBQUssVUFBVSxTQUFTLENBQVUsSUFBVTtJQUNqRCxNQUFNLEVBQ0osWUFBWSxFQUFFLG9CQUFvQixFQUNsQyxLQUFLLEVBQUUsYUFBYSxFQUNwQixHQUFHLEVBQUUsV0FBVyxFQUNoQixZQUFZLEVBQ1osUUFBUSxFQUNSLGNBQWMsR0FBRyxJQUFJLEVBQ3JCLEdBQUcsRUFDSCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLEdBQUcsSUFBSSxDQUFDO0lBRVQsTUFBTSxHQUFHLEdBQUcsSUFBQSx3QkFBYyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUN6QixNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUU5QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFFZCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1FBQzNELEtBQUssR0FBRyxDQUFDLGFBQWEsSUFBSSxhQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUV2SCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUM5RTtJQUVELE1BQU0sWUFBWSxHQUFHLG9CQUFvQixJQUFJLENBQUMsQ0FBQztJQUUvQyxJQUFBLCtCQUFjLEVBQUM7UUFDYixZQUFZO1FBQ1osS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU07UUFDM0IsYUFBYTtRQUNiLFFBQVE7UUFDUixjQUFjO1FBQ2QsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixHQUFHO1FBQ0gsVUFBVSxFQUFFLEdBQUc7UUFDZixnQkFBZ0I7S0FDakIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRXRDLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQTlDRCw4QkE4Q0MifQ==