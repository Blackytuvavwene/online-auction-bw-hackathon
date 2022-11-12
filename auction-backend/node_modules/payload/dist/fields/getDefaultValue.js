"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getValueWithDefault = async ({ value, defaultValue, locale, user }) => {
    if (typeof value !== 'undefined') {
        return value;
    }
    if (defaultValue && typeof defaultValue === 'function') {
        return defaultValue({ locale, user });
    }
    return defaultValue;
};
exports.default = getValueWithDefault;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGVmYXVsdFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZpZWxkcy9nZXREZWZhdWx0VmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFTQSxNQUFNLG1CQUFtQixHQUFHLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBUSxFQUFvQixFQUFFO0lBQ2xHLElBQUksT0FBTyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFlBQVksSUFBSSxPQUFPLFlBQVksS0FBSyxVQUFVLEVBQUU7UUFDdEQsT0FBTyxZQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLGtCQUFlLG1CQUFtQixDQUFDIn0=