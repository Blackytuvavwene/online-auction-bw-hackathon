import React from 'react';
import format from 'date-fns/format';
import { useConfig } from '../../utilities/Config';
import Eyebrow from '../../elements/Eyebrow';
import Form from '../../forms/Form';
import PreviewButton from '../../elements/PreviewButton';
import FormSubmit from '../../forms/Submit';
import RenderFields from '../../forms/RenderFields';
import CopyToClipboard from '../../elements/CopyToClipboard';
import Meta from '../../utilities/Meta';
import fieldTypes from '../../forms/field-types';
import LeaveWithoutSaving from '../../modals/LeaveWithoutSaving';
import VersionsCount from '../../elements/VersionsCount';
import ViewDescription from '../../elements/ViewDescription';
import Loading from '../../elements/Loading';
import { useDocumentInfo } from '../../utilities/DocumentInfo';
import SaveDraft from '../../elements/SaveDraft';
import Publish from '../../elements/Publish';
import Status from '../../elements/Status';
import Autosave from '../../elements/Autosave';
import { OperationContext } from '../../utilities/OperationProvider';
import { Gutter } from '../../elements/Gutter';
import './index.scss';
const baseClass = 'global-edit';
const DefaultGlobalView = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const { admin: { dateFormat } } = useConfig();
    const { publishedDoc } = useDocumentInfo();
    const { global, data, onSave, permissions, action, apiURL, initialState, isLoading, } = props;
    const { fields, preview, versions, label, admin: { description, hideAPIURL, } = {}, } = global;
    const hasSavePermission = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.update) === null || _a === void 0 ? void 0 : _a.permission;
    return (React.createElement("div", { className: baseClass },
        isLoading && (React.createElement(Loading, null)),
        !isLoading && (React.createElement(OperationContext.Provider, { value: "update" },
            React.createElement(Form, { className: `${baseClass}__form`, method: "post", action: action, onSuccess: onSave, disabled: !hasSavePermission, initialState: initialState },
                React.createElement("div", { className: `${baseClass}__main` },
                    React.createElement(Meta, { title: label, description: label, keywords: `${label}, Payload, CMS` }),
                    React.createElement(Eyebrow, null),
                    !(((_b = global.versions) === null || _b === void 0 ? void 0 : _b.drafts) && ((_d = (_c = global.versions) === null || _c === void 0 ? void 0 : _c.drafts) === null || _d === void 0 ? void 0 : _d.autosave)) && (React.createElement(LeaveWithoutSaving, null)),
                    React.createElement(Gutter, { className: `${baseClass}__edit` },
                        React.createElement("header", { className: `${baseClass}__header` },
                            React.createElement("h1", null,
                                "Edit",
                                ' ',
                                label),
                            description && (React.createElement("div", { className: `${baseClass}__sub-header` },
                                React.createElement(ViewDescription, { description: description })))),
                        React.createElement(RenderFields, { readOnly: !hasSavePermission, permissions: permissions.fields, filter: (field) => (!field.admin.position || (field.admin.position && field.admin.position !== 'sidebar')), fieldTypes: fieldTypes, fieldSchema: fields }))),
                React.createElement("div", { className: `${baseClass}__sidebar-wrap` },
                    React.createElement("div", { className: `${baseClass}__sidebar` },
                        React.createElement("div", { className: `${baseClass}__sidebar-sticky-wrap` },
                            React.createElement("div", { className: `${baseClass}__document-actions${((((_e = global.versions) === null || _e === void 0 ? void 0 : _e.drafts) && !((_g = (_f = global.versions) === null || _f === void 0 ? void 0 : _f.drafts) === null || _g === void 0 ? void 0 : _g.autosave)) || preview) ? ` ${baseClass}__document-actions--has-2` : ''}` },
                                (preview && (!((_h = global.versions) === null || _h === void 0 ? void 0 : _h.drafts) || ((_k = (_j = global.versions) === null || _j === void 0 ? void 0 : _j.drafts) === null || _k === void 0 ? void 0 : _k.autosave))) && (React.createElement(PreviewButton, { generatePreviewURL: preview, data: data })),
                                hasSavePermission && (React.createElement(React.Fragment, null,
                                    ((_l = global.versions) === null || _l === void 0 ? void 0 : _l.drafts) && (React.createElement(React.Fragment, null,
                                        !global.versions.drafts.autosave && (React.createElement(SaveDraft, null)),
                                        React.createElement(Publish, null))),
                                    !((_m = global.versions) === null || _m === void 0 ? void 0 : _m.drafts) && (React.createElement(FormSubmit, { buttonId: "action-save" }, "Save"))))),
                            React.createElement("div", { className: `${baseClass}__sidebar-fields` },
                                (preview && (((_o = global.versions) === null || _o === void 0 ? void 0 : _o.drafts) && !((_q = (_p = global.versions) === null || _p === void 0 ? void 0 : _p.drafts) === null || _q === void 0 ? void 0 : _q.autosave))) && (React.createElement(PreviewButton, { generatePreviewURL: preview, data: data })),
                                ((_r = global.versions) === null || _r === void 0 ? void 0 : _r.drafts) && (React.createElement(React.Fragment, null,
                                    React.createElement(Status, null),
                                    (global.versions.drafts.autosave && hasSavePermission) && (React.createElement(Autosave, { publishedDocUpdatedAt: (publishedDoc === null || publishedDoc === void 0 ? void 0 : publishedDoc.updatedAt) || (data === null || data === void 0 ? void 0 : data.createdAt), global: global })))),
                                React.createElement(RenderFields, { readOnly: !hasSavePermission, permissions: permissions.fields, filter: (field) => field.admin.position === 'sidebar', fieldTypes: fieldTypes, fieldSchema: fields })),
                            React.createElement("ul", { className: `${baseClass}__meta` },
                                versions && (React.createElement("li", null,
                                    React.createElement("div", { className: `${baseClass}__label` }, "Versions"),
                                    React.createElement(VersionsCount, { global: global }))),
                                (data && !hideAPIURL) && (React.createElement("li", { className: `${baseClass}__api-url` },
                                    React.createElement("span", { className: `${baseClass}__label` },
                                        "API URL",
                                        ' ',
                                        React.createElement(CopyToClipboard, { value: apiURL })),
                                    React.createElement("a", { href: apiURL, target: "_blank", rel: "noopener noreferrer" }, apiURL))),
                                data.updatedAt && (React.createElement("li", null,
                                    React.createElement("div", { className: `${baseClass}__label` }, "Last Modified"),
                                    React.createElement("div", null, format(new Date(data.updatedAt), dateFormat)))))))))))));
};
export default DefaultGlobalView;
