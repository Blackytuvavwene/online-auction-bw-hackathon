import { unflatten } from 'flatley';
const getDataByPath = (fields, path) => {
    const pathPrefixToRemove = path.substring(0, path.lastIndexOf('.') + 1);
    const name = path.split('.').pop();
    const data = {};
    Object.keys(fields).forEach((key) => {
        if (!fields[key].disableFormData && (key.indexOf(`${path}.`) === 0 || key === path)) {
            data[key.replace(pathPrefixToRemove, '')] = fields[key].value;
        }
    });
    const unflattenedData = unflatten(data);
    return unflattenedData === null || unflattenedData === void 0 ? void 0 : unflattenedData[name];
};
export default getDataByPath;
