import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    docs?: Record<string, unknown>[];
    collection: SanitizedCollectionConfig;
    onCardClick: (doc: any) => void;
};
