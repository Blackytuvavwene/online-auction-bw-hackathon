import { Where } from '../../../../../types';
import { Action, FieldCondition } from '../types';
export declare type Props = {
    fields: FieldCondition[];
    value: Where;
    dispatch: (action: Action) => void;
    orIndex: number;
    andIndex: number;
};
