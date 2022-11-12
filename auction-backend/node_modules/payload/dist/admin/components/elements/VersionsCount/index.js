import React from 'react';
import { useConfig } from '../../utilities/Config';
import Button from '../Button';
import { useDocumentInfo } from '../../utilities/DocumentInfo';
import { shouldIncrementVersionCount } from '../../../../versions/shouldIncrementVersionCount';
import './index.scss';
const baseClass = 'versions-count';
const VersionsCount = ({ collection, global, id }) => {
    var _a, _b, _c;
    const { routes: { admin } } = useConfig();
    const { versions, publishedDoc, unpublishedVersions } = useDocumentInfo();
    // Doc status could come from three places:
    // 1. the newest unpublished version (a draft)
    // 2. the published doc's status, in the event that the doc is published and there are no newer versions
    // 3. if there is no published doc, it's a draft
    const docStatus = ((_c = (_b = (_a = unpublishedVersions === null || unpublishedVersions === void 0 ? void 0 : unpublishedVersions.docs) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.version) === null || _c === void 0 ? void 0 : _c._status) || (publishedDoc === null || publishedDoc === void 0 ? void 0 : publishedDoc._status) || 'draft';
    let versionsURL;
    let entity;
    if (collection) {
        versionsURL = `${admin}/collections/${collection.slug}/${id}/versions`;
        entity = collection;
    }
    if (global) {
        versionsURL = `${admin}/globals/${global.slug}/versions`;
        entity = global;
    }
    let initialVersionsCount = 0;
    if (shouldIncrementVersionCount({ entity, versions, docStatus })) {
        initialVersionsCount = 1;
    }
    const versionCount = ((versions === null || versions === void 0 ? void 0 : versions.totalDocs) || 0) + initialVersionsCount;
    return (React.createElement("div", { className: baseClass },
        versionCount === 0 && 'No versions found',
        versionCount > 0 && (React.createElement(Button, { className: `${baseClass}__button`, buttonStyle: "none", el: "link", to: versionsURL },
            versionCount,
            ' ',
            "version",
            versionCount > 1 && 's',
            ' ',
            "found"))));
};
export default VersionsCount;
