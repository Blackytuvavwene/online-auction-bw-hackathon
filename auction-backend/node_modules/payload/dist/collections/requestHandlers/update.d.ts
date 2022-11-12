import { Response, NextFunction } from 'express';
import { PayloadRequest } from '../../express/types';
export declare type UpdateResult = {
    message: string;
    doc: Document;
};
export declare function deprecatedUpdate(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<UpdateResult> | void>;
export default function updateHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<UpdateResult> | void>;
