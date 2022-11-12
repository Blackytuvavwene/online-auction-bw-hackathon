import { fieldAffectsData } from '../../../../fields/config/types';
export const getFieldPath = (path, field) => {
    // prevents duplicate . on nesting non-named fields
    const dot = path && path.slice(-1) === '.' ? '' : '.';
    return `${path ? `${path}${dot}` : ''}${fieldAffectsData(field) ? field.name : ''}`;
};
