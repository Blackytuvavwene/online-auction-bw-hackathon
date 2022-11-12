import { Payload } from '../../..';
import { Document } from '../../../types';
import { TypeWithID } from '../../config/types';
export declare type Options = {
    slug: string;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    user?: Document;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    draft?: boolean;
};
export default function findOneLocal<T extends TypeWithID = any>(payload: Payload, options: Options): Promise<T>;
