import { TypeWithID } from '../../config/types';
import { Document } from '../../../types';
import { Payload } from '../../../index';
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
export default function deleteLocal<T extends TypeWithID = any>(payload: Payload, options: Options): Promise<T>;
