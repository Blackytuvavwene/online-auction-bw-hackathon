import { Where } from '../../../../types';
import { FilterOptions, FilterOptionsProps } from '../../../../fields/config/types';
export declare const getFilterOptionsQuery: (filterOptions: FilterOptions, options: FilterOptionsProps) => {
    [collection: string]: Where;
};
