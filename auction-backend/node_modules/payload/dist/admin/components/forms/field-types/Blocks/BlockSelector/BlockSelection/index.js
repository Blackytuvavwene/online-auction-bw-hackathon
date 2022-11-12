import React from 'react';
import DefaultBlockImage from '../../../../../graphics/DefaultBlockImage';
import './index.scss';
const baseClass = 'block-selection';
const BlockSelection = (props) => {
    const { addRow, addRowIndex, block, close, } = props;
    const { labels, slug, imageURL, imageAltText, } = block;
    const handleBlockSelection = () => {
        close();
        addRow(addRowIndex, slug);
    };
    return (React.createElement("button", { className: baseClass, tabIndex: 0, type: "button", onClick: handleBlockSelection },
        React.createElement("div", { className: `${baseClass}__image` }, imageURL
            ? (React.createElement("img", { src: imageURL, alt: imageAltText }))
            : React.createElement(DefaultBlockImage, null)),
        React.createElement("div", { className: `${baseClass}__label` }, labels.singular)));
};
export default BlockSelection;
