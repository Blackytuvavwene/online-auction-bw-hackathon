import { PayloadRequest } from '../../../express/types';
import { Collection } from '../../config/types';
export declare type Resolver = (_: unknown, args: {
    locale?: string;
    draft: boolean;
    id: string;
    fallbackLocale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function findByIDResolver(collection: Collection): Resolver;
