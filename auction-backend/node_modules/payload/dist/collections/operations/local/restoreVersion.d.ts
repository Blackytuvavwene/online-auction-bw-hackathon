import { Payload } from '../../..';
import { Document } from '../../../types';
import { TypeWithVersion } from '../../../versions/types';
export declare type Options = {
    collection: string;
    id: string;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
export default function restoreVersionLocal<T extends TypeWithVersion<T> = any>(payload: Payload, options: Options): Promise<T>;
