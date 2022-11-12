import React from 'react';
import UploadCard from '../UploadCard';
import './index.scss';
const baseClass = 'upload-gallery';
const UploadGallery = (props) => {
    const { docs, onCardClick, collection } = props;
    if (docs && docs.length > 0) {
        return (React.createElement("ul", { className: baseClass }, docs.map((doc, i) => (React.createElement("li", { key: i },
            React.createElement(UploadCard, { doc: doc, ...{ collection }, onClick: () => onCardClick(doc) }))))));
    }
    return null;
};
export default UploadGallery;
