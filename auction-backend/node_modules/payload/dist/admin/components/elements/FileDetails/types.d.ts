import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    collection: SanitizedCollectionConfig;
    doc: Record<string, unknown>;
    handleRemove?: () => void;
};
