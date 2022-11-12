import React from 'react';
import './index.scss';
const baseClass = 'condition-value-number';
const NumberField = ({ onChange, value }) => (React.createElement("input", { placeholder: "Enter a value", className: baseClass, type: "number", onChange: (e) => onChange(e.target.value), value: value }));
export default NumberField;
