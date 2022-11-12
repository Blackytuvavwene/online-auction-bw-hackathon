import { UploadField } from '../../../../../fields/config/types';
import { FieldTypes } from '..';
export declare type Props = Omit<UploadField, 'type'> & {
    path?: string;
    fieldTypes: FieldTypes;
};
