import React from 'react';
import Helmet from 'react-helmet';
import { useConfig } from '../Config';
import payloadFavicon from '../../../assets/images/favicon.svg';
import payloadOgImage from '../../../assets/images/og-image.png';
const Meta = ({ description, lang = 'en', meta = [], title, keywords = 'CMS, Admin, Dashboard', }) => {
    var _a, _b, _c, _d;
    const config = useConfig();
    const titleSuffix = (_b = (_a = config.admin.meta) === null || _a === void 0 ? void 0 : _a.titleSuffix) !== null && _b !== void 0 ? _b : '- Payload';
    const favicon = (_c = config.admin.meta.favicon) !== null && _c !== void 0 ? _c : payloadFavicon;
    const ogImage = (_d = config.admin.meta.ogImage) !== null && _d !== void 0 ? _d : payloadOgImage;
    return (React.createElement(Helmet, { htmlAttributes: {
            lang,
        }, title: `${title} ${titleSuffix}`, meta: [
            {
                name: 'description',
                content: description,
            },
            {
                name: 'keywords',
                content: keywords,
            },
            {
                property: 'og:title',
                content: `${title} ${titleSuffix}`,
            },
            {
                property: 'og:image',
                content: ogImage,
            },
            {
                property: 'og:description',
                content: description,
            },
            {
                property: 'og:type',
                content: 'website',
            },
            {
                name: 'twitter:card',
                content: 'summary',
            },
            {
                name: 'twitter:title',
                content: title,
            },
            {
                name: 'twitter:description',
                content: description,
            },
        ].concat(meta), link: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                href: favicon,
            },
        ] }));
};
export default Meta;
