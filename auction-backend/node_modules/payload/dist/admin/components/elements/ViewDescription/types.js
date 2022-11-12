import React from 'react';
export function isComponent(description) {
    return React.isValidElement(description);
}
