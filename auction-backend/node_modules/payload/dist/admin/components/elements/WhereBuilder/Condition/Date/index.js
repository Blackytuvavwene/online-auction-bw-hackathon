import React from 'react';
import DatePicker from '../../../DatePicker';
const baseClass = 'condition-value-date';
const DateField = ({ onChange, value }) => (React.createElement("div", { className: baseClass },
    React.createElement(DatePicker, { onChange: onChange, value: value })));
export default DateField;
