import { fieldAffectsData } from '../../../../../fields/config/types';
const formatFields = (collection, isEditing) => (isEditing
    ? collection.fields.filter((field) => (fieldAffectsData(field) && field.name !== 'id') || true)
    : collection.fields);
export default formatFields;
