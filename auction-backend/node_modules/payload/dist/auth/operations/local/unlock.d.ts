import { PayloadRequest } from '../../../express/types';
import { Payload } from '../../..';
export declare type Options = {
    collection: string;
    data: {
        email: any;
    };
    req?: PayloadRequest;
    overrideAccess: boolean;
};
declare function localUnlock(payload: Payload, options: Options): Promise<boolean>;
export default localUnlock;
