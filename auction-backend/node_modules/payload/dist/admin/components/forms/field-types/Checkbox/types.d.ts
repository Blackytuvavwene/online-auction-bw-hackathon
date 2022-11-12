import { CheckboxField } from '../../../../../fields/config/types';
export declare type Props = Omit<CheckboxField, 'type'> & {
    path?: string;
    onChange?: (val: boolean) => void;
    disableFormData?: boolean;
};
