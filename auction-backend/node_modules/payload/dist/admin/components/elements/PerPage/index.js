import React from 'react';
import qs from 'qs';
import { useHistory } from 'react-router-dom';
import { useSearchParams } from '../../utilities/SearchParams';
import Popup from '../Popup';
import Chevron from '../../icons/Chevron';
import { defaults } from '../../../../collections/config/defaults';
import './index.scss';
const baseClass = 'per-page';
const defaultLimits = defaults.admin.pagination.limits;
const PerPage = ({ limits = defaultLimits, limit, handleChange, modifySearchParams = true }) => {
    const params = useSearchParams();
    const history = useHistory();
    return (React.createElement("div", { className: baseClass },
        React.createElement(Popup, { horizontalAlign: "right", button: (React.createElement("strong", null,
                "Per Page:",
                ' ',
                limit,
                React.createElement(Chevron, null))), render: ({ close }) => (React.createElement("div", null,
                React.createElement("ul", null, limits.map((limitNumber, i) => (React.createElement("li", { className: `${baseClass}-item`, key: i },
                    React.createElement("button", { type: "button", className: [
                            `${baseClass}__button`,
                            limitNumber === Number(limit) && `${baseClass}__button-active`,
                        ].filter(Boolean).join(' '), onClick: () => {
                            close();
                            if (handleChange)
                                handleChange(limitNumber);
                            if (modifySearchParams) {
                                history.replace({
                                    search: qs.stringify({
                                        ...params,
                                        limit: limitNumber,
                                    }, { addQueryPrefix: true }),
                                });
                            }
                        } },
                        limitNumber === Number(limit) && (React.createElement(Chevron, null)),
                        limitNumber))))))) })));
};
export default PerPage;
