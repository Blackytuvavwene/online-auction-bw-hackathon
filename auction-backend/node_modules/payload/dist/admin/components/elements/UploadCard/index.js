/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Thumbnail from '../Thumbnail';
import './index.scss';
const baseClass = 'upload-card';
const UploadCard = (props) => {
    const { className, onClick, doc, collection, } = props;
    const classes = [
        baseClass,
        className,
        typeof onClick === 'function' && `${baseClass}--has-on-click`,
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, onClick: typeof onClick === 'function' ? onClick : undefined },
        React.createElement(Thumbnail, { size: "expand", doc: doc, collection: collection }),
        React.createElement("div", { className: `${baseClass}__filename` }, typeof (doc === null || doc === void 0 ? void 0 : doc.filename) === 'string' ? doc === null || doc === void 0 ? void 0 : doc.filename : '[Untitled]')));
};
export default UploadCard;
