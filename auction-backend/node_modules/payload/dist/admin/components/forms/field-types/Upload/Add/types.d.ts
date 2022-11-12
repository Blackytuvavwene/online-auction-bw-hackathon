import { SanitizedCollectionConfig } from '../../../../../../collections/config/types';
import { FieldTypes } from '../..';
export declare type Props = {
    setValue: (val: {
        id: string;
    } | null) => void;
    collection: SanitizedCollectionConfig;
    slug: string;
    fieldTypes: FieldTypes;
};
