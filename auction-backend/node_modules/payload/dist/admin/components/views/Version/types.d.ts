import { SanitizedCollectionConfig } from '../../../../collections/config/types';
import { SanitizedGlobalConfig } from '../../../../globals/config/types';
export declare type LocaleOption = {
    label: string;
    value: string;
};
export declare type CompareOption = {
    label: string;
    value: string;
    relationTo?: string;
    options?: CompareOption[];
};
export declare type Props = {
    collection?: SanitizedCollectionConfig;
    global?: SanitizedGlobalConfig;
};
