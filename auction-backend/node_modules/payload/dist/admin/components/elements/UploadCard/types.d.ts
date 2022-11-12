import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    className?: string;
    collection: SanitizedCollectionConfig;
    doc: Record<string, unknown>;
    onClick?: () => void;
};
