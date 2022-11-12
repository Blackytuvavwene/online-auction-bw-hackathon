import React from 'react';
import Button from '../Button';
import './index.scss';
const baseClass = 'card';
const Card = (props) => {
    const { id, title, actions, onClick } = props;
    const classes = [
        baseClass,
        id,
        onClick && `${baseClass}--has-onclick`,
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, id: id },
        React.createElement("h5", null, title),
        actions && (React.createElement("div", { className: `${baseClass}__actions` }, actions)),
        onClick && (React.createElement(Button, { className: `${baseClass}__click`, buttonStyle: "none", onClick: onClick }))));
};
export default Card;
