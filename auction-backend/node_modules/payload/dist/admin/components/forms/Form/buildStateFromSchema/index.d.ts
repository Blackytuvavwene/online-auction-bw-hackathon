import { User } from '../../../../../auth';
import { Field as FieldSchema } from '../../../../../fields/config/types';
import { Fields, Data } from '../types';
declare type Args = {
    fieldSchema: FieldSchema[];
    data?: Data;
    siblingData?: Data;
    user?: User;
    id?: string | number;
    operation?: 'create' | 'update';
    locale: string;
};
declare const buildStateFromSchema: (args: Args) => Promise<Fields>;
export default buildStateFromSchema;
