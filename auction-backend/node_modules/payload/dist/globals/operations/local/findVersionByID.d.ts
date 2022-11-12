import { Payload } from '../../..';
import { Document } from '../../../types';
import { TypeWithVersion } from '../../../versions/types';
export declare type Options = {
    slug: string;
    id: string;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    disableErrors?: boolean;
};
export default function findVersionByIDLocal<T extends TypeWithVersion<T> = any>(payload: Payload, options: Options): Promise<T>;
