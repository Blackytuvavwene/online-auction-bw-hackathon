import React from 'react';
import { useConfig } from '../../../utilities/Config';
import CopyToClipboard from '../../CopyToClipboard';
import formatFilesize from '../../../../../uploads/formatFilesize';
import './index.scss';
const baseClass = 'file-meta';
const Meta = (props) => {
    const { filename, filesize, width, height, mimeType, staticURL, url, } = props;
    const { serverURL } = useConfig();
    const fileURL = url || `${serverURL}${staticURL}/${filename}`;
    return (React.createElement("div", { className: baseClass },
        React.createElement("div", { className: `${baseClass}__url` },
            React.createElement("a", { href: fileURL, target: "_blank", rel: "noopener noreferrer" }, filename),
            React.createElement(CopyToClipboard, { value: fileURL, defaultMessage: "Copy URL" })),
        React.createElement("div", { className: `${baseClass}__size-type` },
            formatFilesize(filesize),
            (width && height) && (React.createElement(React.Fragment, null,
                "\u00A0-\u00A0",
                width,
                "x",
                height)),
            mimeType && (React.createElement(React.Fragment, null,
                "\u00A0-\u00A0",
                mimeType)))));
};
export default Meta;
