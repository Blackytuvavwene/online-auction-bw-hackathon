import { GlobalPermission } from '../../../../auth/types';
import { SanitizedGlobalConfig } from '../../../../globals/config/types';
import { Fields } from '../../forms/Form/types';
import { Document } from '../../../../types';
export declare type IndexProps = {
    global: SanitizedGlobalConfig;
};
export declare type Props = {
    global: SanitizedGlobalConfig;
    data: Document;
    onSave: () => void;
    permissions: GlobalPermission;
    action: string;
    apiURL: string;
    initialState: Fields;
    isLoading: boolean;
    autosaveEnabled: boolean;
};
