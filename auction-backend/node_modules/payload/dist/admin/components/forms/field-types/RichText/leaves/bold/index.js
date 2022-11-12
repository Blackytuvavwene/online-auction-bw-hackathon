import React from 'react';
import LeafButton from '../Button';
import BoldIcon from '../../../../../icons/Bold';
const Bold = ({ attributes, children }) => (React.createElement("strong", { ...attributes }, children));
const bold = {
    Button: () => (React.createElement(LeafButton, { format: "bold" },
        React.createElement(BoldIcon, null))),
    Leaf: Bold,
};
export default bold;
