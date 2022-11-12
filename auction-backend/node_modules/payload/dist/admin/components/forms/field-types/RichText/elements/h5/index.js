import React from 'react';
import ElementButton from '../Button';
import H5Icon from '../../../../../icons/headings/H5';
const H5 = ({ attributes, children }) => (React.createElement("h5", { ...attributes }, children));
const h5 = {
    Button: () => (React.createElement(ElementButton, { format: "h5" },
        React.createElement(H5Icon, null))),
    Element: H5,
};
export default h5;
