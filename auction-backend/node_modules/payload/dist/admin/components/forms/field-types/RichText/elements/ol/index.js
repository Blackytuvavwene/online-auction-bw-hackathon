import React from 'react';
import ListButton from '../ListButton';
import OLIcon from '../../../../../icons/OrderedList';
import './index.scss';
const OL = ({ attributes, children }) => (React.createElement("ol", { className: "rich-text-ol", ...attributes }, children));
const ol = {
    Button: () => (React.createElement(ListButton, { format: "ol" },
        React.createElement(OLIcon, null))),
    Element: OL,
};
export default ol;
