"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseFields = void 0;
const promise_1 = require("./promise");
const traverseFields = async ({ data, doc, previousDoc, previousSiblingDoc, fields, operation, req, siblingData, siblingDoc, }) => {
    const promises = [];
    fields.forEach((field) => {
        promises.push((0, promise_1.promise)({
            data,
            doc,
            previousDoc,
            previousSiblingDoc,
            field,
            operation,
            req,
            siblingData,
            siblingDoc,
        }));
    });
    await Promise.all(promises);
};
exports.traverseFields = traverseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VGaWVsZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZmllbGRzL2hvb2tzL2FmdGVyQ2hhbmdlL3RyYXZlcnNlRmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFvQztBQWU3QixNQUFNLGNBQWMsR0FBRyxLQUFLLEVBQUUsRUFDbkMsSUFBSSxFQUNKLEdBQUcsRUFDSCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixTQUFTLEVBQ1QsR0FBRyxFQUNILFdBQVcsRUFDWCxVQUFVLEdBQ0wsRUFBaUIsRUFBRTtJQUN4QixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFFcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBQSxpQkFBTyxFQUFDO1lBQ3BCLElBQUk7WUFDSixHQUFHO1lBQ0gsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixLQUFLO1lBQ0wsU0FBUztZQUNULEdBQUc7WUFDSCxXQUFXO1lBQ1gsVUFBVTtTQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFDO0FBNUJXLFFBQUEsY0FBYyxrQkE0QnpCIn0=