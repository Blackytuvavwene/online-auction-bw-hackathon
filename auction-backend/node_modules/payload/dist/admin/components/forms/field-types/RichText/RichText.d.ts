import React from 'react';
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { Props } from './types';
import './index.scss';
declare type CustomText = {
    text: string;
    [x: string]: unknown;
};
declare type CustomElement = {
    type?: string;
    children: CustomText[];
};
declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
declare const _default: React.FC<Props>;
export default _default;
