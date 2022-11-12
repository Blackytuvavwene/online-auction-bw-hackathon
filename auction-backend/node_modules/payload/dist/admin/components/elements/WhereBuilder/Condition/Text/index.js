import React from 'react';
import './index.scss';
const baseClass = 'condition-value-text';
const Text = ({ onChange, value }) => (React.createElement("input", { placeholder: "Enter a value", className: baseClass, type: "text", onChange: (e) => onChange(e.target.value), value: value || '' }));
export default Text;
