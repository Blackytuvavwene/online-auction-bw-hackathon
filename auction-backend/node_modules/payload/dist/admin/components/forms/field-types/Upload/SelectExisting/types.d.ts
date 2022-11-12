import { SanitizedCollectionConfig } from '../../../../../../collections/config/types';
import { FilterOptions } from '../../../../../../fields/config/types';
export declare type Props = {
    setValue: (val: {
        id: string;
    } | null) => void;
    collection: SanitizedCollectionConfig;
    slug: string;
    path: any;
    filterOptions: FilterOptions;
};
