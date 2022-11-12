import { TypeWithID } from '../../config/types';
import { PayloadRequest } from '../../../express/types';
import { Document } from '../../../types';
import { Payload } from '../../..';
export declare type Options = {
    collection: string;
    id: string;
    depth?: number;
    currentDepth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    disableErrors?: boolean;
    req?: PayloadRequest;
    draft?: boolean;
};
export default function findByIDLocal<T extends TypeWithID = any>(payload: Payload, options: Options): Promise<T>;
