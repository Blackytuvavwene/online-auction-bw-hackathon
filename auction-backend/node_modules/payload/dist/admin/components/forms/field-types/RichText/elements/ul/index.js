import React from 'react';
import ULIcon from '../../../../../icons/UnorderedList';
import ListButton from '../ListButton';
import './index.scss';
const UL = ({ attributes, children }) => (React.createElement("ul", { className: "rich-text-ul", ...attributes }, children));
const ul = {
    Button: () => (React.createElement(ListButton, { format: "ul" },
        React.createElement(ULIcon, null))),
    Element: UL,
};
export default ul;
