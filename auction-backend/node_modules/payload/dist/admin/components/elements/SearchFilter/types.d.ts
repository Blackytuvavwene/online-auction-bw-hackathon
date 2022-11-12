import { FieldAffectingData } from '../../../../fields/config/types';
import { Where } from '../../../../types';
export declare type Props = {
    fieldName?: string;
    fieldLabel?: string;
    modifySearchQuery?: boolean;
    listSearchableFields?: FieldAffectingData[];
    handleChange?: (where: Where) => void;
};
