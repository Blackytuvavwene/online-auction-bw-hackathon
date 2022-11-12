import React from 'react';
import FileGraphic from '../../graphics/File';
import useThumbnail from '../../../hooks/useThumbnail';
import './index.scss';
const baseClass = 'thumbnail';
const Thumbnail = (props) => {
    const { doc, doc: { filename, }, collection, size, } = props;
    const thumbnailSRC = useThumbnail(collection, doc);
    const classes = [
        baseClass,
        `${baseClass}--size-${size || 'medium'}`,
    ].join(' ');
    return (React.createElement("div", { className: classes },
        thumbnailSRC && (React.createElement("img", { src: thumbnailSRC, alt: filename })),
        !thumbnailSRC && (React.createElement(FileGraphic, null))));
};
export default Thumbnail;
