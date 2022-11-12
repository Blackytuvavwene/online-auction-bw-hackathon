import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    collection: SanitizedCollectionConfig;
    columns: string[];
    setColumns: (columns: string[]) => void;
};
