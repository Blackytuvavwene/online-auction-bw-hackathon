import { RadioField } from '../../../../../fields/config/types';
export declare type Props = Omit<RadioField, 'type'> & {
    path?: string;
};
export declare type OnChange<T = string> = (value: T) => void;
