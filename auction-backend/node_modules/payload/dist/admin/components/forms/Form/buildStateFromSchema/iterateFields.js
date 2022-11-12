import { fieldIsPresentationalOnly, } from '../../../../../fields/config/types';
import { addFieldStatePromise } from './addFieldStatePromise';
export const iterateFields = ({ fields, data, parentPassesCondition, path = '', fullData, user, locale, operation, fieldPromises, id, state, }) => {
    fields.forEach((field) => {
        var _a, _b;
        const initialData = data;
        if (!fieldIsPresentationalOnly(field) && !((_a = field === null || field === void 0 ? void 0 : field.admin) === null || _a === void 0 ? void 0 : _a.disabled)) {
            const passesCondition = Boolean((((_b = field === null || field === void 0 ? void 0 : field.admin) === null || _b === void 0 ? void 0 : _b.condition) ? field.admin.condition(fullData || {}, initialData || {}) : true) && parentPassesCondition);
            fieldPromises.push(addFieldStatePromise({
                fullData,
                id,
                locale,
                operation,
                path,
                state,
                user,
                fieldPromises,
                field,
                passesCondition,
                data,
            }));
        }
    });
};
