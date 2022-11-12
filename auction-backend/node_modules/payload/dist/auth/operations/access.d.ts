import { PayloadRequest } from '../../express/types';
import { Permissions } from '../types';
declare type Arguments = {
    req: PayloadRequest;
};
declare function accessOperation(args: Arguments): Promise<Permissions>;
export default accessOperation;
