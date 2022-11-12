import React, { Dispatch } from 'react';
import { Field as FieldConfig, Condition, Validate } from '../../../../fields/config/types';
export declare type Field = {
    value: unknown;
    initialValue: unknown;
    errorMessage?: string;
    valid: boolean;
    validate?: Validate;
    disableFormData?: boolean;
    condition?: Condition;
    passesCondition?: boolean;
};
export declare type Fields = {
    [path: string]: Field;
};
export declare type Data = {
    [key: string]: any;
};
export declare type Preferences = {
    [key: string]: unknown;
};
export declare type Props = {
    disabled?: boolean;
    onSubmit?: (fields: Fields, data: Data) => void;
    method?: 'get' | 'patch' | 'delete' | 'post';
    action?: string;
    handleResponse?: (res: Response) => void;
    onSuccess?: (json: unknown) => void;
    className?: string;
    redirect?: string;
    disableSuccessStatus?: boolean;
    initialState?: Fields;
    initialData?: Data;
    waitForAutocomplete?: boolean;
    log?: boolean;
    validationOperation?: 'create' | 'update';
    children?: React.ReactNode;
};
export declare type SubmitOptions = {
    action?: string;
    method?: string;
    overrides?: Record<string, unknown>;
    skipValidation?: boolean;
};
export declare type DispatchFields = React.Dispatch<any>;
export declare type Submit = (options?: SubmitOptions, e?: React.FormEvent<HTMLFormElement>) => Promise<void>;
export declare type ValidateForm = () => Promise<boolean>;
export declare type CreateFormData = (overrides?: any) => FormData;
export declare type GetFields = () => Fields;
export declare type GetField = (path: string) => Field;
export declare type GetData = () => Data;
export declare type GetSiblingData = (path: string) => Data;
export declare type GetDataByPath = <T = unknown>(path: string) => T;
export declare type SetModified = (modified: boolean) => void;
export declare type SetSubmitted = (submitted: boolean) => void;
export declare type SetProcessing = (processing: boolean) => void;
export declare type Reset = (fieldSchema: FieldConfig[], data: unknown) => Promise<void>;
export declare type REPLACE_STATE = {
    type: 'REPLACE_STATE';
    state: Fields;
};
export declare type REMOVE = {
    type: 'REMOVE';
    path: string;
};
export declare type REMOVE_ROW = {
    type: 'REMOVE_ROW';
    rowIndex: number;
    path: string;
};
export declare type ADD_ROW = {
    type: 'ADD_ROW';
    rowIndex: number;
    path: string;
    subFieldState?: Fields;
    blockType?: string;
};
export declare type DUPLICATE_ROW = {
    type: 'DUPLICATE_ROW';
    rowIndex: number;
    path: string;
};
export declare type MOVE_ROW = {
    type: 'MOVE_ROW';
    moveFromIndex: number;
    moveToIndex: number;
    path: string;
};
export declare type MODIFY_CONDITION = {
    type: 'MODIFY_CONDITION';
    path: string;
    result: boolean;
};
export declare type UPDATE = {
    type: 'UPDATE';
    path: string;
} & Partial<Field>;
export declare type FieldAction = REPLACE_STATE | REMOVE | REMOVE_ROW | ADD_ROW | DUPLICATE_ROW | MOVE_ROW | MODIFY_CONDITION | UPDATE;
export declare type FormFieldsContext = [Fields, Dispatch<FieldAction>];
export declare type Context = {
    /**
     * @deprecated Form context fields may be outdated and should not be relied on. Instead, prefer `useFormFields`.
     */
    fields: Fields;
    submit: Submit;
    dispatchFields: Dispatch<FieldAction>;
    validateForm: ValidateForm;
    createFormData: CreateFormData;
    disabled: boolean;
    getFields: GetFields;
    getField: GetField;
    getData: GetData;
    getSiblingData: GetSiblingData;
    getDataByPath: GetDataByPath;
    setModified: SetModified;
    setProcessing: SetProcessing;
    setSubmitted: SetSubmitted;
    formRef: React.MutableRefObject<HTMLFormElement>;
    reset: Reset;
};
