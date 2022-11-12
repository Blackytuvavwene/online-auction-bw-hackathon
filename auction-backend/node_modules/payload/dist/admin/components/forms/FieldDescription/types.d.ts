import React from 'react';
export declare type DescriptionFunction = (value?: unknown) => string;
export declare type DescriptionComponent = React.ComponentType<{
    value: unknown;
}>;
export declare type Description = string | DescriptionFunction | DescriptionComponent;
export declare type Props = {
    description?: Description;
    value?: unknown;
    className?: string;
};
export declare function isComponent(description: Description): description is DescriptionComponent;
