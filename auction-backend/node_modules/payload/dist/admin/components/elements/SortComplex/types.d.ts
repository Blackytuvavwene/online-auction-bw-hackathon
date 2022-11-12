import { SanitizedCollectionConfig } from '../../../../collections/config/types';
export declare type Props = {
    collection: SanitizedCollectionConfig;
    sort?: string;
    handleChange?: (sort: string) => void;
    modifySearchQuery?: boolean;
};
