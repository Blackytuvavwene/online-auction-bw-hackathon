import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useConfig } from '../../../utilities/Config';
import UploadGallery from '../../../elements/UploadGallery';
import Eyebrow from '../../../elements/Eyebrow';
import Paginator from '../../../elements/Paginator';
import ListControls from '../../../elements/ListControls';
import Pill from '../../../elements/Pill';
import Button from '../../../elements/Button';
import Table from '../../../elements/Table';
import Meta from '../../../utilities/Meta';
import ViewDescription from '../../../elements/ViewDescription';
import PerPage from '../../../elements/PerPage';
import { Gutter } from '../../../elements/Gutter';
import { RelationshipProvider } from './RelationshipProvider';
import './index.scss';
const baseClass = 'collection-list';
const DefaultList = (props) => {
    var _a, _b;
    const { collection, collection: { upload, slug, labels: { singular: singularLabel, plural: pluralLabel, }, admin: { description, } = {}, }, data, newDocumentURL, limit, tableColumns, columnNames, setColumns, hasCreatePermission, } = props;
    const { routes: { admin } } = useConfig();
    const history = useHistory();
    return (React.createElement("div", { className: baseClass },
        React.createElement(Meta, { title: collection.labels.plural }),
        React.createElement(Eyebrow, null),
        React.createElement(Gutter, { className: `${baseClass}__wrap` },
            React.createElement("header", { className: `${baseClass}__header` },
                React.createElement("h1", null, pluralLabel),
                hasCreatePermission && (React.createElement(Pill, { to: newDocumentURL }, "Create New")),
                description && (React.createElement("div", { className: `${baseClass}__sub-header` },
                    React.createElement(ViewDescription, { description: description })))),
            React.createElement(ListControls, { collection: collection, columns: columnNames, setColumns: setColumns, enableColumns: Boolean(!upload), enableSort: Boolean(upload) }),
            (data.docs && data.docs.length > 0) && (React.createElement(React.Fragment, null,
                !upload && (React.createElement(RelationshipProvider, null,
                    React.createElement(Table, { data: data.docs, columns: tableColumns }))),
                upload && (React.createElement(UploadGallery, { docs: data.docs, collection: collection, onCardClick: (doc) => history.push(`${admin}/collections/${slug}/${doc.id}`) })))),
            data.docs && data.docs.length === 0 && (React.createElement("div", { className: `${baseClass}__no-results` },
                React.createElement("p", null,
                    "No",
                    ' ',
                    pluralLabel,
                    ' ',
                    "found. Either no",
                    ' ',
                    pluralLabel,
                    ' ',
                    "exist yet or none match the filters you've specified above."),
                hasCreatePermission && (React.createElement(Button, { el: "link", to: newDocumentURL },
                    "Create new",
                    ' ',
                    singularLabel)))),
            React.createElement("div", { className: `${baseClass}__page-controls` },
                React.createElement(Paginator, { limit: data.limit, totalPages: data.totalPages, page: data.page, hasPrevPage: data.hasPrevPage, hasNextPage: data.hasNextPage, prevPage: data.prevPage, nextPage: data.nextPage, numberOfNeighbors: 1 }),
                (data === null || data === void 0 ? void 0 : data.totalDocs) > 0 && (React.createElement(Fragment, null,
                    React.createElement("div", { className: `${baseClass}__page-info` },
                        (data.page * data.limit) - (data.limit - 1),
                        "-",
                        data.totalPages > 1 && data.totalPages !== data.page ? (data.limit * data.page) : data.totalDocs,
                        ' ',
                        "of",
                        ' ',
                        data.totalDocs),
                    React.createElement(PerPage, { limits: (_b = (_a = collection === null || collection === void 0 ? void 0 : collection.admin) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.limits, limit: limit })))))));
};
export default DefaultList;
