import React from 'react';
import withCondition from '../../withCondition';
const UI = (props) => {
    const { admin: { components: { Field, }, }, } = props;
    if (Field) {
        return React.createElement(Field, { ...props });
    }
    return null;
};
export default withCondition(UI);
