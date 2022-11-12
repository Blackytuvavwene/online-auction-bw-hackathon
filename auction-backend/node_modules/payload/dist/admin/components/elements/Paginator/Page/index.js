import React from 'react';
const baseClass = 'paginator__page';
const Page = ({ page = 1, isCurrent, updatePage, isFirstPage = false, isLastPage = false, }) => {
    const classes = [
        baseClass,
        isCurrent && `${baseClass}--is-current`,
        isFirstPage && `${baseClass}--is-first-page`,
        isLastPage && `${baseClass}--is-last-page`,
    ].filter(Boolean).join(' ');
    return (React.createElement("button", { className: classes, onClick: () => updatePage(page), type: "button" }, page));
};
export default Page;
