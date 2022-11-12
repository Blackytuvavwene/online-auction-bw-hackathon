import React from 'react';
const ArrayCell = ({ data, field }) => {
    var _a;
    const arrayFields = data !== null && data !== void 0 ? data : [];
    const label = `${arrayFields.length} ${((_a = field === null || field === void 0 ? void 0 : field.labels) === null || _a === void 0 ? void 0 : _a.plural) || 'Rows'}`;
    return (React.createElement("span", null, label));
};
export default ArrayCell;
