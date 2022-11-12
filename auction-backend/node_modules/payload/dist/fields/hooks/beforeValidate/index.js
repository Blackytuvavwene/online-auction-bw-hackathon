"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeValidate = void 0;
const traverseFields_1 = require("./traverseFields");
const deepCopyObject_1 = __importDefault(require("../../../utilities/deepCopyObject"));
const beforeValidate = async ({ data: incomingData, doc, entityConfig, id, operation, overrideAccess, req, }) => {
    const data = (0, deepCopyObject_1.default)(incomingData);
    await (0, traverseFields_1.traverseFields)({
        data,
        doc,
        fields: entityConfig.fields,
        id,
        operation,
        overrideAccess,
        req,
        siblingData: data,
        siblingDoc: doc,
    });
    return data;
};
exports.beforeValidate = beforeValidate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2JlZm9yZVZhbGlkYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLHFEQUFrRDtBQUNsRCx1RkFBK0Q7QUFZeEQsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLEVBQ25DLElBQUksRUFBRSxZQUFZLEVBQ2xCLEdBQUcsRUFDSCxZQUFZLEVBQ1osRUFBRSxFQUNGLFNBQVMsRUFDVCxjQUFjLEVBQ2QsR0FBRyxHQUNFLEVBQW9DLEVBQUU7SUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBQSx3QkFBYyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sSUFBQSwrQkFBYyxFQUFDO1FBQ25CLElBQUk7UUFDSixHQUFHO1FBQ0gsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQzNCLEVBQUU7UUFDRixTQUFTO1FBQ1QsY0FBYztRQUNkLEdBQUc7UUFDSCxXQUFXLEVBQUUsSUFBSTtRQUNqQixVQUFVLEVBQUUsR0FBRztLQUNoQixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQXhCVyxRQUFBLGNBQWMsa0JBd0J6QiJ9