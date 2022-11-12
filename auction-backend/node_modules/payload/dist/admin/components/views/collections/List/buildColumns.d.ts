import { SanitizedCollectionConfig } from '../../../../../collections/config/types';
import { Column } from '../../../elements/Table/types';
declare const buildColumns: (collection: SanitizedCollectionConfig, columns: string[]) => Column[];
export default buildColumns;
