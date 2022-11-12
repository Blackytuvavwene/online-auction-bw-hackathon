import { Response } from 'express';
import { Collection } from '../../config/types';
import { PayloadRequest } from '../../../express/types';
export declare type Resolver = (_: unknown, args: {
    locale?: string;
    fallbackLocale?: string;
    draft: boolean;
    id: number | string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function findVersionByIDResolver(collection: Collection): Resolver;
