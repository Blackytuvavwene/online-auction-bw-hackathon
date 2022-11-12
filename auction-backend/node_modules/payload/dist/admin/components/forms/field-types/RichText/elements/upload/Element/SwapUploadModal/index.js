import * as React from 'react';
import { Modal } from '@faceless-ui/modal';
import { Transforms } from 'slate';
import { ReactEditor, useSlateStatic } from 'slate-react';
import { useConfig } from '../../../../../../../utilities/Config';
import usePayloadAPI from '../../../../../../../../hooks/usePayloadAPI';
import MinimalTemplate from '../../../../../../../templates/Minimal';
import Button from '../../../../../../../elements/Button';
import Label from '../../../../../../Label';
import ReactSelect from '../../../../../../../elements/ReactSelect';
import ListControls from '../../../../../../../elements/ListControls';
import UploadGallery from '../../../../../../../elements/UploadGallery';
import Paginator from '../../../../../../../elements/Paginator';
import PerPage from '../../../../../../../elements/PerPage';
import formatFields from '../../../../../../../views/collections/List/formatFields';
import '../../addSwapModals.scss';
const baseClass = 'rich-text-upload-modal';
export const SwapUploadModal = ({ closeModal, element, setRelatedCollectionConfig, relatedCollectionConfig, slug }) => {
    var _a, _b;
    const { collections, serverURL, routes: { api } } = useConfig();
    const editor = useSlateStatic();
    const [modalCollection, setModalCollection] = React.useState(relatedCollectionConfig);
    const [modalCollectionOption, setModalCollectionOption] = React.useState({ label: relatedCollectionConfig.labels.singular, value: relatedCollectionConfig.slug });
    const [availableCollections] = React.useState(() => collections.filter(({ admin: { enableRichTextRelationship }, upload }) => (Boolean(upload) && enableRichTextRelationship)));
    const [fields, setFields] = React.useState(() => formatFields(modalCollection));
    const [limit, setLimit] = React.useState();
    const [sort, setSort] = React.useState(null);
    const [where, setWhere] = React.useState(null);
    const [page, setPage] = React.useState(null);
    const moreThanOneAvailableCollection = availableCollections.length > 1;
    const apiURL = `${serverURL}${api}/${modalCollection.slug}`;
    const [{ data }, { setParams }] = usePayloadAPI(apiURL, {});
    const handleUpdateUpload = React.useCallback((doc) => {
        const newNode = {
            type: 'upload',
            value: { id: doc.id },
            relationTo: modalCollection.slug,
            children: [
                { text: ' ' },
            ],
        };
        const elementPath = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, newNode, { at: elementPath });
        closeModal();
    }, [closeModal, editor, element, modalCollection]);
    React.useEffect(() => {
        const params = {};
        if (page)
            params.page = page;
        if (where)
            params.where = where;
        if (sort)
            params.sort = sort;
        if (limit)
            params.limit = limit;
        setParams(params);
    }, [setParams, page, sort, where, limit]);
    React.useEffect(() => {
        setFields(formatFields(modalCollection));
        setLimit(modalCollection.admin.pagination.defaultLimit);
    }, [modalCollection]);
    React.useEffect(() => {
        setModalCollection(collections.find(({ slug: collectionSlug }) => modalCollectionOption.value === collectionSlug));
    }, [modalCollectionOption, collections]);
    return (React.createElement(Modal, { className: baseClass, slug: slug },
        React.createElement(MinimalTemplate, { width: "wide" },
            React.createElement("header", { className: `${baseClass}__header` },
                React.createElement("h1", null,
                    "Choose",
                    ' ',
                    modalCollection.labels.singular),
                React.createElement(Button, { icon: "x", round: true, buttonStyle: "icon-label", iconStyle: "with-border", onClick: closeModal })),
            moreThanOneAvailableCollection && (React.createElement("div", { className: `${baseClass}__select-collection-wrap` },
                React.createElement(Label, { label: "Select a Collection to Browse" }),
                React.createElement(ReactSelect, { className: `${baseClass}__select-collection`, value: modalCollectionOption, onChange: setModalCollectionOption, options: availableCollections.map((coll) => ({ label: coll.labels.singular, value: coll.slug })) }))),
            React.createElement(ListControls, { collection: {
                    ...modalCollection,
                    fields,
                }, enableColumns: false, enableSort: true, modifySearchQuery: false, handleSortChange: setSort, handleWhereChange: setWhere }),
            React.createElement(UploadGallery, { docs: data === null || data === void 0 ? void 0 : data.docs, collection: modalCollection, onCardClick: (doc) => {
                    handleUpdateUpload(doc);
                    setRelatedCollectionConfig(modalCollection);
                    closeModal();
                } }),
            React.createElement("div", { className: `${baseClass}__page-controls` },
                React.createElement(Paginator, { limit: data.limit, totalPages: data.totalPages, page: data.page, hasPrevPage: data.hasPrevPage, hasNextPage: data.hasNextPage, prevPage: data.prevPage, nextPage: data.nextPage, numberOfNeighbors: 1, onChange: setPage, disableHistoryChange: true }),
                (data === null || data === void 0 ? void 0 : data.totalDocs) > 0 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: `${baseClass}__page-info` },
                        data.page,
                        "-",
                        data.totalPages > 1 ? data.limit : data.totalDocs,
                        ' ',
                        "of",
                        ' ',
                        data.totalDocs),
                    React.createElement(PerPage, { limits: (_b = (_a = modalCollection === null || modalCollection === void 0 ? void 0 : modalCollection.admin) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.limits, limit: limit, modifySearchParams: false, handleChange: setLimit })))))));
};
