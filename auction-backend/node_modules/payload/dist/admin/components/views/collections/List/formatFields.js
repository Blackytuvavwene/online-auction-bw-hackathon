import { fieldAffectsData, fieldIsPresentationalOnly } from '../../../../../fields/config/types';
const formatFields = (config) => {
    const hasID = config.fields.findIndex((field) => fieldAffectsData(field) && field.name === 'id') > -1;
    let fields = config.fields.reduce((formatted, field) => {
        var _a;
        if (!fieldIsPresentationalOnly(field) && (field.hidden === true || ((_a = field === null || field === void 0 ? void 0 : field.admin) === null || _a === void 0 ? void 0 : _a.disabled) === true)) {
            return formatted;
        }
        return [
            ...formatted,
            field,
        ];
    }, hasID ? [] : [{ name: 'id', label: 'ID', type: 'text' }]);
    if (config.timestamps) {
        fields = fields.concat([
            {
                name: 'createdAt',
                label: 'Created At',
                type: 'date',
            }, {
                name: 'updatedAt',
                label: 'Updated At',
                type: 'date',
            },
        ]);
    }
    if (config.upload) {
        fields = fields.concat([
            {
                name: 'filename',
                label: 'Filename',
                type: 'text',
            },
        ]);
    }
    return fields;
};
export default formatFields;
