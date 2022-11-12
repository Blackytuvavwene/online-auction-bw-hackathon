import React from 'react';
import ElementButton from '../Button';
import H2Icon from '../../../../../icons/headings/H2';
const H2 = ({ attributes, children }) => (React.createElement("h2", { ...attributes }, children));
const h2 = {
    Button: () => (React.createElement(ElementButton, { format: "h2" },
        React.createElement(H2Icon, null))),
    Element: H2,
};
export default h2;
