import { UploadedFile } from 'express-fileupload';
export declare type ProbedImageSize = {
    width: number;
    height: number;
    type: string;
    mime: string;
};
export default function (image: UploadedFile): Promise<ProbedImageSize>;
