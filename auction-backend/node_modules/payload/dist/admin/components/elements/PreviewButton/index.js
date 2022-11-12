import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utilities/Auth';
import Button from '../Button';
import { useLocale } from '../../utilities/Locale';
import './index.scss';
const baseClass = 'preview-btn';
const PreviewButton = (props) => {
    const { generatePreviewURL, data, } = props;
    const [url, setUrl] = useState(undefined);
    const locale = useLocale();
    const { token } = useAuth();
    useEffect(() => {
        if (generatePreviewURL && typeof generatePreviewURL === 'function') {
            const makeRequest = async () => {
                const previewURL = await generatePreviewURL(data, { locale, token });
                setUrl(previewURL);
            };
            makeRequest();
        }
    }, [
        generatePreviewURL,
        locale,
        token,
        data,
    ]);
    if (url) {
        return (React.createElement(Button, { el: "anchor", className: baseClass, buttonStyle: "secondary", url: url, newTab: true }, "Preview"));
    }
    return null;
};
export default PreviewButton;
