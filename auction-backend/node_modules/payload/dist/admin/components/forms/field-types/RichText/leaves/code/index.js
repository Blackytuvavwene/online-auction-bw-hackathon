import React from 'react';
import LeafButton from '../Button';
import CodeIcon from '../../../../../icons/Code';
const Code = ({ attributes, children }) => (React.createElement("code", { ...attributes }, children));
const code = {
    Button: () => (React.createElement(LeafButton, { format: "code" },
        React.createElement(CodeIcon, null))),
    Leaf: Code,
};
export default code;
