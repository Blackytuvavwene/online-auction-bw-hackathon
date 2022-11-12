import React from 'react';
import useField from '../../../useField';
import './index.scss';
const baseClass = 'section-title';
const SectionTitle = (props) => {
    const { path, readOnly } = props;
    const { value, setValue } = useField({ path });
    const classes = [
        baseClass,
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, "data-value": value },
        React.createElement("input", { className: `${baseClass}__input`, id: path, value: value || '', placeholder: "Untitled", type: "text", name: path, onChange: (e) => {
                e.stopPropagation();
                e.preventDefault();
                setValue(e.target.value);
            }, readOnly: readOnly })));
};
export default SectionTitle;
