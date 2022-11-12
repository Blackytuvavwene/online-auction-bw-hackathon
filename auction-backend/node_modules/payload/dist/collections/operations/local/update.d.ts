import { Payload } from '../../..';
import { Document } from '../../../types';
export declare type Options<T> = {
    collection: string;
    id: string | number;
    data: Partial<T>;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    filePath?: string;
    file?: File;
    overwriteExistingFiles?: boolean;
    draft?: boolean;
    autosave?: boolean;
};
export default function updateLocal<T = any>(payload: Payload, options: Options<T>): Promise<T>;
