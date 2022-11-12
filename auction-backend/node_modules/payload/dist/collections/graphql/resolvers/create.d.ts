import { Response } from 'express';
import { PayloadRequest } from '../../../express/types';
import { Collection } from '../../config/types';
export declare type Resolver = (_: unknown, args: {
    data: Record<string, unknown>;
    locale?: string;
    draft: boolean;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function createResolver(collection: Collection): Resolver;
