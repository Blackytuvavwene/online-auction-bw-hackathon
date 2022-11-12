"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beforeChange = void 0;
const traverseFields_1 = require("./traverseFields");
const errors_1 = require("../../../errors");
const deepCopyObject_1 = __importDefault(require("../../../utilities/deepCopyObject"));
const beforeChange = async ({ data: incomingData, doc, docWithLocales, entityConfig, id, operation, req, skipValidation, }) => {
    const data = (0, deepCopyObject_1.default)(incomingData);
    const mergeLocaleActions = [];
    const errors = [];
    await (0, traverseFields_1.traverseFields)({
        data,
        doc,
        docWithLocales,
        errors,
        id,
        operation,
        path: '',
        mergeLocaleActions,
        req,
        siblingData: data,
        siblingDoc: doc,
        siblingDocWithLocales: docWithLocales,
        fields: entityConfig.fields,
        skipValidation,
    });
    if (errors.length > 0) {
        throw new errors_1.ValidationError(errors);
    }
    mergeLocaleActions.forEach((action) => action());
    return data;
};
exports.beforeChange = beforeChange;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxxREFBa0Q7QUFDbEQsNENBQWtEO0FBQ2xELHVGQUErRDtBQWF4RCxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsRUFDakMsSUFBSSxFQUFFLFlBQVksRUFDbEIsR0FBRyxFQUNILGNBQWMsRUFDZCxZQUFZLEVBQ1osRUFBRSxFQUNGLFNBQVMsRUFDVCxHQUFHLEVBQ0gsY0FBYyxHQUNULEVBQW9DLEVBQUU7SUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBQSx3QkFBYyxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQzlCLE1BQU0sTUFBTSxHQUF5QyxFQUFFLENBQUM7SUFFeEQsTUFBTSxJQUFBLCtCQUFjLEVBQUM7UUFDbkIsSUFBSTtRQUNKLEdBQUc7UUFDSCxjQUFjO1FBQ2QsTUFBTTtRQUNOLEVBQUU7UUFDRixTQUFTO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixrQkFBa0I7UUFDbEIsR0FBRztRQUNILFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFVBQVUsRUFBRSxHQUFHO1FBQ2YscUJBQXFCLEVBQUUsY0FBYztRQUNyQyxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU07UUFDM0IsY0FBYztLQUNmLENBQUMsQ0FBQztJQUVILElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckIsTUFBTSxJQUFJLHdCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkM7SUFFRCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFFakQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUF0Q1csUUFBQSxZQUFZLGdCQXNDdkIifQ==