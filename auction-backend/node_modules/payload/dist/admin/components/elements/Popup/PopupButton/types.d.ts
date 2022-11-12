/// <reference types="react" />
export declare type Props = {
    className?: string;
    buttonType: 'custom' | 'default' | 'none';
    button: React.ReactNode;
    setActive: (active: boolean) => void;
    active: boolean;
};
