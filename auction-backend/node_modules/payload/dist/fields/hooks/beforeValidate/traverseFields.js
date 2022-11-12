"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseFields = void 0;
const promise_1 = require("./promise");
const traverseFields = async ({ data, doc, fields, id, operation, overrideAccess, req, siblingData, siblingDoc, }) => {
    const promises = [];
    fields.forEach((field) => {
        promises.push((0, promise_1.promise)({
            data,
            doc,
            field,
            id,
            operation,
            overrideAccess,
            req,
            siblingData,
            siblingDoc,
        }));
    });
    await Promise.all(promises);
};
exports.traverseFields = traverseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VGaWVsZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2JlZm9yZVZhbGlkYXRlL3RyYXZlcnNlRmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHVDQUFvQztBQWM3QixNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsRUFDbkMsSUFBSSxFQUNKLEdBQUcsRUFDSCxNQUFNLEVBQ04sRUFBRSxFQUNGLFNBQVMsRUFDVCxjQUFjLEVBQ2QsR0FBRyxFQUNILFdBQVcsRUFDWCxVQUFVLEdBQ0wsRUFBaUIsRUFBRTtJQUN4QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBQSxpQkFBTyxFQUFDO1lBQ3BCLElBQUk7WUFDSixHQUFHO1lBQ0gsS0FBSztZQUNMLEVBQUU7WUFDRixTQUFTO1lBQ1QsY0FBYztZQUNkLEdBQUc7WUFDSCxXQUFXO1lBQ1gsVUFBVTtTQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBMUJXLFFBQUEsY0FBYyxrQkEwQnpCIn0=