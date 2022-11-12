import React from 'react';
import ElementButton from '../Button';
import H4Icon from '../../../../../icons/headings/H4';
const H4 = ({ attributes, children }) => (React.createElement("h4", { ...attributes }, children));
const h4 = {
    Button: () => (React.createElement(ElementButton, { format: "h4" },
        React.createElement(H4Icon, null))),
    Element: H4,
};
export default h4;
