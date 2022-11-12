import { SanitizedCollectionConfig } from '../../../../../../collections/config/types';
export declare type Data = {
    filename: string;
    mimeType: string;
    filesize: number;
};
export declare type Props = {
    data?: Data;
    collection: SanitizedCollectionConfig;
    adminThumbnail?: string;
    mimeTypes?: string[];
};
