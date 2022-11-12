import { SanitizedGlobalConfig, TypeWithID } from '../config/types';
import { PayloadRequest } from '../../express/types';
declare type Args = {
    globalConfig: SanitizedGlobalConfig;
    slug: string;
    req: PayloadRequest;
    depth?: number;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    draft?: boolean;
    autosave?: boolean;
    data: Record<string, unknown>;
};
declare function update<T extends TypeWithID = any>(args: Args): Promise<T>;
export default update;
