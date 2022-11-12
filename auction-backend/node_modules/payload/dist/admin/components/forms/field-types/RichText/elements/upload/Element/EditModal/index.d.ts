import React from 'react';
import { Element } from 'slate';
import { SanitizedCollectionConfig } from '../../../../../../../../../collections/config/types';
import { Field } from '../../../../../../../../../fields/config/types';
import './index.scss';
declare type Props = {
    slug: string;
    closeModal: () => void;
    relatedCollectionConfig: SanitizedCollectionConfig;
    fieldSchema: Field[];
    element: Element & {
        fields: Field[];
    };
};
export declare const EditModal: React.FC<Props>;
export {};
