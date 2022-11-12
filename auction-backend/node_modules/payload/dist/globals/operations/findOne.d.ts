import { SanitizedGlobalConfig, TypeWithID } from '../config/types';
import { PayloadRequest } from '../../express/types';
declare type Args = {
    globalConfig: SanitizedGlobalConfig;
    locale?: string;
    req: PayloadRequest;
    slug: string;
    depth?: number;
    showHiddenFields?: boolean;
    draft?: boolean;
    overrideAccess?: boolean;
};
declare function findOne<T extends TypeWithID = any>(args: Args): Promise<T>;
export default findOne;
