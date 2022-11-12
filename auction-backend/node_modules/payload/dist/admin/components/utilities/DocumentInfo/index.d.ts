import React from 'react';
import { ContextType, Props } from './types';
declare const Context: React.Context<ContextType>;
export declare const DocumentInfoProvider: React.FC<Props>;
export declare const useDocumentInfo: () => ContextType;
export default Context;
