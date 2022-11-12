"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flatley_1 = require("flatley");
const reduceFieldsToValues_1 = __importDefault(require("./reduceFieldsToValues"));
const getSiblingData = (fields, path) => {
    if (path.indexOf('.') === -1) {
        return (0, reduceFieldsToValues_1.default)(fields, true);
    }
    const siblingFields = {};
    // If this field is nested
    // We can provide a list of sibling fields
    const parentFieldPath = path.substring(0, path.lastIndexOf('.') + 1);
    Object.keys(fields).forEach((fieldKey) => {
        if (!fields[fieldKey].disableFormData && fieldKey.indexOf(parentFieldPath) === 0) {
            siblingFields[fieldKey.replace(parentFieldPath, '')] = fields[fieldKey].value;
        }
    });
    return (0, flatley_1.unflatten)(siblingFields, { safe: true });
};
exports.default = getSiblingData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2libGluZ0RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9Gb3JtL2dldFNpYmxpbmdEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUNBQW9DO0FBRXBDLGtGQUEwRDtBQUUxRCxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQWMsRUFBRSxJQUFZLEVBQVEsRUFBRTtJQUM1RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDNUIsT0FBTyxJQUFBLDhCQUFvQixFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMzQztJQUNELE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUV6QiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRixhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQy9FO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLElBQUEsbUJBQVMsRUFBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==