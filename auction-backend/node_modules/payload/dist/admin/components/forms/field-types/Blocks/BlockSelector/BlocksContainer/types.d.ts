import { Block } from '../../../../../../../fields/config/types';
export declare type Props = {
    blocks: Block[];
    close: () => void;
    addRow: (i: number, block: string) => void;
    addRowIndex: number;
};
