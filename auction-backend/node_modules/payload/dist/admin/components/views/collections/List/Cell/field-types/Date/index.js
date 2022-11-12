import React from 'react';
import format from 'date-fns/format';
import { useConfig } from '../../../../../../utilities/Config';
const DateCell = ({ data }) => {
    const { admin: { dateFormat } } = useConfig();
    return (React.createElement("span", null, data && format(new Date(data), dateFormat)));
};
export default DateCell;
