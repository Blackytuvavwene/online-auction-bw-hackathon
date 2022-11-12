import { useConfig } from '../components/utilities/Config';
import isImage from '../../uploads/isImage';
const absoluteURLPattern = new RegExp('^(?:[a-z]+:)?//', 'i');
const useThumbnail = (collection, doc) => {
    var _a, _b;
    const { upload: { staticURL, adminThumbnail, }, } = collection;
    const { mimeType, sizes, filename, url, } = doc;
    const { serverURL } = useConfig();
    if (isImage(mimeType)) {
        if (typeof adminThumbnail === 'undefined' && url) {
            return url;
        }
        if (typeof adminThumbnail === 'function') {
            const thumbnailURL = adminThumbnail({ doc });
            if (absoluteURLPattern.test(thumbnailURL)) {
                return thumbnailURL;
            }
            return `${serverURL}${thumbnailURL}`;
        }
        if ((_a = sizes === null || sizes === void 0 ? void 0 : sizes[adminThumbnail]) === null || _a === void 0 ? void 0 : _a.url) {
            return sizes[adminThumbnail].url;
        }
        if ((_b = sizes === null || sizes === void 0 ? void 0 : sizes[adminThumbnail]) === null || _b === void 0 ? void 0 : _b.filename) {
            return `${serverURL}${staticURL}/${sizes[adminThumbnail].filename}`;
        }
        return `${serverURL}${staticURL}/${filename}`;
    }
    return false;
};
export default useThumbnail;
