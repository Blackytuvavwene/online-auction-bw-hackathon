"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseFields = void 0;
const promise_1 = require("./promise");
const traverseFields = ({ currentDepth, depth, doc, fieldPromises, fields, findMany, flattenLocales, overrideAccess, populationPromises, req, siblingDoc, showHiddenFields, }) => {
    fields.forEach((field) => {
        fieldPromises.push((0, promise_1.promise)({
            currentDepth,
            depth,
            doc,
            field,
            fieldPromises,
            findMany,
            flattenLocales,
            overrideAccess,
            populationPromises,
            req,
            siblingDoc,
            showHiddenFields,
        }));
    });
};
exports.traverseFields = traverseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VGaWVsZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2FmdGVyUmVhZC90cmF2ZXJzZUZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBb0M7QUFrQjdCLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFDN0IsWUFBWSxFQUNaLEtBQUssRUFDTCxHQUFHLEVBQ0gsYUFBYSxFQUNiLE1BQU0sRUFDTixRQUFRLEVBQ1IsY0FBYyxFQUNkLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsR0FBRyxFQUNILFVBQVUsRUFDVixnQkFBZ0IsR0FDWCxFQUFRLEVBQUU7SUFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFBLGlCQUFPLEVBQUM7WUFDekIsWUFBWTtZQUNaLEtBQUs7WUFDTCxHQUFHO1lBQ0gsS0FBSztZQUNMLGFBQWE7WUFDYixRQUFRO1lBQ1IsY0FBYztZQUNkLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsR0FBRztZQUNILFVBQVU7WUFDVixnQkFBZ0I7U0FDakIsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQTlCVyxRQUFBLGNBQWMsa0JBOEJ6QiJ9