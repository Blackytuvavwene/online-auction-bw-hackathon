import React from 'react';
import LeafButton from '../Button';
import UnderlineIcon from '../../../../../icons/Underline';
const Underline = ({ attributes, children }) => (React.createElement("u", { ...attributes }, children));
const underline = {
    Button: () => (React.createElement(LeafButton, { format: "underline" },
        React.createElement(UnderlineIcon, null))),
    Leaf: Underline,
};
export default underline;
