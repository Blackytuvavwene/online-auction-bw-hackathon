import * as React from 'react';
import { Element } from 'slate';
import { SanitizedCollectionConfig } from '../../../../../../../../../collections/config/types';
import '../../addSwapModals.scss';
declare type Props = {
    slug: string;
    element: Element;
    closeModal: () => void;
    setRelatedCollectionConfig: (collectionConfig: SanitizedCollectionConfig) => void;
    relatedCollectionConfig: SanitizedCollectionConfig;
};
export declare const SwapUploadModal: React.FC<Props>;
export {};
