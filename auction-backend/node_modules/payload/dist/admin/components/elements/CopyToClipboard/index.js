import React, { useEffect, useState, useRef } from 'react';
import Copy from '../../icons/Copy';
import Tooltip from '../Tooltip';
import './index.scss';
const baseClass = 'copy-to-clipboard';
const CopyToClipboard = ({ value, defaultMessage = 'copy', successMessage = 'copied', }) => {
    const ref = useRef(null);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (copied && !hovered) {
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        }
    }, [copied, hovered]);
    if (value) {
        return (React.createElement("button", { onMouseEnter: () => {
                setHovered(true);
                setCopied(false);
            }, onMouseLeave: () => {
                setHovered(false);
                setCopied(false);
            }, type: "button", className: baseClass, onClick: () => {
                if (ref && ref.current) {
                    ref.current.select();
                    ref.current.setSelectionRange(0, value.length + 1);
                    document.execCommand('copy');
                    setCopied(true);
                }
            } },
            React.createElement(Copy, null),
            React.createElement(Tooltip, null,
                copied && successMessage,
                !copied && defaultMessage),
            React.createElement("textarea", { readOnly: true, value: value, ref: ref })));
    }
    return null;
};
export default CopyToClipboard;
