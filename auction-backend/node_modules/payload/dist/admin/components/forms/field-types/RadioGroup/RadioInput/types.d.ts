import { OnChange } from '../types';
export declare type Props = {
    isSelected: boolean;
    option: {
        label: string;
        value: string;
    };
    onChange: OnChange;
    path: string;
};
