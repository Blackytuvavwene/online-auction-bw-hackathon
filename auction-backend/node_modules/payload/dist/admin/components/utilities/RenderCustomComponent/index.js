import React from 'react';
const RenderCustomComponent = (props) => {
    const { CustomComponent, DefaultComponent, componentProps } = props;
    if (CustomComponent) {
        return (React.createElement(CustomComponent, { ...componentProps }));
    }
    return (React.createElement(DefaultComponent, { ...componentProps }));
};
export default RenderCustomComponent;
