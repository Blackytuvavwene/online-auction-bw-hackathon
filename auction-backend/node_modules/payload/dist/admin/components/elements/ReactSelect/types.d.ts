import { OptionsType, GroupedOptionsType } from 'react-select';
export declare type Options = OptionsType<Value> | GroupedOptionsType<Value>;
export declare type OptionType = {
    [key: string]: any;
};
export declare type Value = {
    label: string;
    value: string | null;
    options?: Options;
};
export declare type Props = {
    className?: string;
    value?: Value | Value[];
    onChange?: (value: any) => void;
    disabled?: boolean;
    showError?: boolean;
    options: Options;
    isMulti?: boolean;
    isSortable?: boolean;
    isDisabled?: boolean;
    onInputChange?: (val: string) => void;
    onMenuScrollToBottom?: () => void;
    placeholder?: string;
    isSearchable?: boolean;
    isClearable?: boolean;
    filterOption?: (({ label, value, data }: {
        label: string;
        value: string;
        data: OptionType;
    }, search: string) => boolean) | undefined;
};
