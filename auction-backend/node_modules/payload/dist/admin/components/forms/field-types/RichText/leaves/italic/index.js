import React from 'react';
import LeafButton from '../Button';
import ItalicIcon from '../../../../../icons/Italic';
const Italic = ({ attributes, children }) => (React.createElement("em", { ...attributes }, children));
const italic = {
    Button: () => (React.createElement(LeafButton, { format: "italic" },
        React.createElement(ItalicIcon, null))),
    Leaf: Italic,
};
export default italic;
