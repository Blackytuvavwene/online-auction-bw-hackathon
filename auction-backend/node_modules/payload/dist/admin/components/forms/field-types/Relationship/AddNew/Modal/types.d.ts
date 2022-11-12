import { SanitizedCollectionConfig } from '../../../../../../../collections/config/types';
export declare type Props = {
    modalSlug: string;
    modalCollection: SanitizedCollectionConfig;
    onSave: (json: Record<string, unknown>) => void;
};
