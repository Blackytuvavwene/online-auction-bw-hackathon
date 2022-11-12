import React from 'react';
import LeafButton from '../Button';
import StrikethroughIcon from '../../../../../icons/Strikethrough';
const Strikethrough = ({ attributes, children }) => (React.createElement("del", { ...attributes }, children));
const strikethrough = {
    Button: () => (React.createElement(LeafButton, { format: "strikethrough" },
        React.createElement(StrikethroughIcon, null))),
    Leaf: Strikethrough,
};
export default strikethrough;
