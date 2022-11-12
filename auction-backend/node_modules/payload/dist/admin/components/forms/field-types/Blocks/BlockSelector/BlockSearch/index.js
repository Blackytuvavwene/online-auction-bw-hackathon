import React from 'react';
import SearchIcon from '../../../../../graphics/Search';
import './index.scss';
const baseClass = 'block-search';
const BlockSearch = (props) => {
    const { setSearchTerm } = props;
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (React.createElement("div", { className: baseClass },
        React.createElement("input", { className: `${baseClass}__input`, placeholder: "Search for a block", onChange: handleChange }),
        React.createElement(SearchIcon, null)));
};
export default BlockSearch;
