"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterChange = void 0;
const traverseFields_1 = require("./traverseFields");
const deepCopyObject_1 = __importDefault(require("../../../utilities/deepCopyObject"));
const afterChange = async ({ data, doc: incomingDoc, previousDoc, entityConfig, operation, req, }) => {
    const doc = (0, deepCopyObject_1.default)(incomingDoc);
    await (0, traverseFields_1.traverseFields)({
        data,
        doc,
        previousDoc,
        fields: entityConfig.fields,
        operation,
        req,
        previousSiblingDoc: previousDoc,
        siblingDoc: doc,
        siblingData: data,
    });
    return doc;
};
exports.afterChange = afterChange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2FmdGVyQ2hhbmdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLHFEQUFrRDtBQUNsRCx1RkFBK0Q7QUFXeEQsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUFFLEVBQ2hDLElBQUksRUFDSixHQUFHLEVBQUUsV0FBVyxFQUNoQixXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFDVCxHQUFHLEdBQ0UsRUFBb0MsRUFBRTtJQUMzQyxNQUFNLEdBQUcsR0FBRyxJQUFBLHdCQUFjLEVBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEMsTUFBTSxJQUFBLCtCQUFjLEVBQUM7UUFDbkIsSUFBSTtRQUNKLEdBQUc7UUFDSCxXQUFXO1FBQ1gsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQzNCLFNBQVM7UUFDVCxHQUFHO1FBQ0gsa0JBQWtCLEVBQUUsV0FBVztRQUMvQixVQUFVLEVBQUUsR0FBRztRQUNmLFdBQVcsRUFBRSxJQUFJO0tBQ2xCLENBQUMsQ0FBQztJQUVILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBdkJXLFFBQUEsV0FBVyxlQXVCdEIifQ==