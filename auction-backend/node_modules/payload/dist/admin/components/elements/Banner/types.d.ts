import { MouseEvent } from 'react';
declare type onClick = (event: MouseEvent) => void;
export declare type Props = {
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    alignIcon?: 'left' | 'right';
    onClick?: onClick;
    to?: string;
    type?: 'error' | 'success' | 'info' | 'default';
};
export declare type RenderedTypeProps = {
    className?: string;
    onClick?: onClick;
    to: string;
    children?: React.ReactNode;
};
export {};
