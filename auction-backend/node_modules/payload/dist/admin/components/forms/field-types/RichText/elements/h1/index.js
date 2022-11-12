import React from 'react';
import ElementButton from '../Button';
import H1Icon from '../../../../../icons/headings/H1';
const H1 = ({ attributes, children }) => (React.createElement("h1", { ...attributes }, children));
const h1 = {
    Button: () => (React.createElement(ElementButton, { format: "h1" },
        React.createElement(H1Icon, null))),
    Element: H1,
};
export default h1;
