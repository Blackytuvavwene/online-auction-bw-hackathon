"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseFields = void 0;
const promise_1 = require("./promise");
const traverseFields = async ({ data, doc, docWithLocales, errors, fields, id, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation, }) => {
    const promises = [];
    fields.forEach((field) => {
        promises.push((0, promise_1.promise)({
            data,
            doc,
            docWithLocales,
            errors,
            field,
            id,
            mergeLocaleActions,
            operation,
            path,
            req,
            siblingData,
            siblingDoc,
            siblingDocWithLocales,
            skipValidation,
        }));
    });
    await Promise.all(promises);
};
exports.traverseFields = traverseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VGaWVsZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2JlZm9yZUNoYW5nZS90cmF2ZXJzZUZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBb0M7QUFxQjdCLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxFQUNuQyxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsRUFDZCxNQUFNLEVBQ04sTUFBTSxFQUNOLEVBQUUsRUFDRixrQkFBa0IsRUFDbEIsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsV0FBVyxFQUNYLFVBQVUsRUFDVixxQkFBcUIsRUFDckIsY0FBYyxHQUNULEVBQWlCLEVBQUU7SUFDeEIsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRXBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUEsaUJBQU8sRUFBQztZQUNwQixJQUFJO1lBQ0osR0FBRztZQUNILGNBQWM7WUFDZCxNQUFNO1lBQ04sS0FBSztZQUNMLEVBQUU7WUFDRixrQkFBa0I7WUFDbEIsU0FBUztZQUNULElBQUk7WUFDSixHQUFHO1lBQ0gsV0FBVztZQUNYLFVBQVU7WUFDVixxQkFBcUI7WUFDckIsY0FBYztTQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBdENXLFFBQUEsY0FBYyxrQkFzQ3pCIn0=