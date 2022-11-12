import React from 'react';
import ElementButton from '../Button';
import H3Icon from '../../../../../icons/headings/H3';
const H3 = ({ attributes, children }) => (React.createElement("h3", { ...attributes }, children));
const h3 = {
    Button: () => (React.createElement(ElementButton, { format: "h3" },
        React.createElement(H3Icon, null))),
    Element: H3,
};
export default h3;
