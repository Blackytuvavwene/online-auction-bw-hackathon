import { useContext, createContext } from 'react';
export const OperationContext = createContext(undefined);
export const useOperation = () => useContext(OperationContext);
