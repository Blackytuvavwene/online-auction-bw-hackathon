import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    doc: Record<string, unknown>;
    collection: SanitizedCollectionConfig;
    size?: 'small' | 'medium' | 'large' | 'expand';
};
