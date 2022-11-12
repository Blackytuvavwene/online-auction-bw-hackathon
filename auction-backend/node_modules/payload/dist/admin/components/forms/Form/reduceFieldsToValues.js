"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatley_1 = require("flatley");
const reduceFieldsToValues = (fields, unflatten) => {
    const data = {};
    Object.keys(fields).forEach((key) => {
        if (!fields[key].disableFormData) {
            data[key] = fields[key].value;
        }
    });
    if (unflatten) {
        return (0, flatley_1.unflatten)(data, { safe: true });
    }
    return data;
};
exports.default = reduceFieldsToValues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlRmllbGRzVG9WYWx1ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBR3hELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxNQUFjLEVBQUUsU0FBbUIsRUFBUSxFQUFFO0lBQ3pFLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVoQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFNBQVMsRUFBRTtRQUNiLE9BQU8sSUFBQSxtQkFBZ0IsRUFBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUMvQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsb0JBQW9CLENBQUMifQ==