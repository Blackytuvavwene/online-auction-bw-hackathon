import React from 'react';
import { DiffMethod } from 'react-diff-viewer';
import { FieldPermissions } from '../../../../../../auth';
export declare type FieldComponents = Record<string, React.FC<Props>>;
export declare type Props = {
    diffMethod?: DiffMethod;
    fieldComponents: FieldComponents;
    version: any;
    comparison: any;
    field: any;
    permissions?: Record<string, FieldPermissions>;
    locale?: string;
    locales?: string[];
    disableGutter?: boolean;
    isRichText?: boolean;
};
