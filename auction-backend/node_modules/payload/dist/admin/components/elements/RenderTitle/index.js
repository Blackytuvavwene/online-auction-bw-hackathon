import React from 'react';
import useTitle from '../../../hooks/useTitle';
import IDLabel from '../IDLabel';
const baseClass = 'render-title';
const RenderTitle = (props) => {
    const { useAsTitle, title: titleFromProps, data, fallback = '[untitled]', } = props;
    const titleFromForm = useTitle(useAsTitle);
    let title = titleFromForm;
    if (!title)
        title = data === null || data === void 0 ? void 0 : data.id;
    if (!title)
        title = fallback;
    title = titleFromProps || title;
    const idAsTitle = title === (data === null || data === void 0 ? void 0 : data.id);
    if (idAsTitle) {
        return (React.createElement(IDLabel, { id: data === null || data === void 0 ? void 0 : data.id }));
    }
    return (React.createElement("span", { className: baseClass }, title));
};
export default RenderTitle;
