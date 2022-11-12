import { SanitizedCollectionConfig } from '../../../../collections/config/types';
import { SanitizedGlobalConfig } from '../../../../globals/config/types';
export declare type Props = {
    collection?: SanitizedCollectionConfig;
    global?: SanitizedGlobalConfig;
    id?: string | number;
    publishedDocUpdatedAt: string;
};
