import { Payload } from '../..';
import { Block } from '../../fields/config/types';
declare type Args = {
    payload: Payload;
    block: Block;
    forceNullable?: boolean;
};
declare function buildBlockType({ payload, block, forceNullable, }: Args): void;
export default buildBlockType;
