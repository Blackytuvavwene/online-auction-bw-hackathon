import React from 'react';
import ElementButton from '../Button';
import H6Icon from '../../../../../icons/headings/H6';
const H6 = ({ attributes, children }) => (React.createElement("h6", { ...attributes }, children));
const h6 = {
    Button: () => (React.createElement(ElementButton, { format: "h6" },
        React.createElement(H6Icon, null))),
    Element: H6,
};
export default h6;
