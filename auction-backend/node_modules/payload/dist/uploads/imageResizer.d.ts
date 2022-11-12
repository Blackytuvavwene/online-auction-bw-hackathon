/// <reference types="node" />
import { SanitizedCollectionConfig } from '../collections/config/types';
import { PayloadRequest } from '../express/types';
import { ProbedImageSize } from './getImageSize';
import { FileSizes, FileToSave } from './types';
declare type Args = {
    req: PayloadRequest;
    file: Buffer;
    dimensions: ProbedImageSize;
    staticPath: string;
    config: SanitizedCollectionConfig;
    savedFilename: string;
    mimeType: string;
};
declare type Result = Promise<{
    sizeData: FileSizes;
    sizesToSave: FileToSave[];
}>;
export default function resizeAndSave({ req, file, dimensions, staticPath, config, savedFilename, }: Args): Promise<Result>;
export {};
