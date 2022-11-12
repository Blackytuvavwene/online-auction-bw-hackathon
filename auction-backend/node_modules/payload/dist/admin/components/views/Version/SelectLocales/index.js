import React from 'react';
import ReactSelect from '../../../elements/ReactSelect';
import './index.scss';
const baseClass = 'select-version-locales';
const SelectLocales = ({ onChange, value, options }) => (React.createElement("div", { className: baseClass },
    React.createElement("div", { className: `${baseClass}__label` }, "Show locales:"),
    React.createElement(ReactSelect, { isMulti: true, placeholder: "Select locales to display", onChange: onChange, value: value, options: options })));
export default SelectLocales;
