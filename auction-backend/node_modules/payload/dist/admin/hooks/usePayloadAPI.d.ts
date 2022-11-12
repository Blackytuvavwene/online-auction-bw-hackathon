/// <reference types="react" />
declare type Result = [
    {
        isLoading: boolean;
        isError: boolean;
        data: any;
    },
    {
        setParams: React.Dispatch<unknown>;
    }
];
declare type Options = {
    initialParams?: unknown;
    initialData?: any;
};
declare type UsePayloadAPI = (url: string, options?: Options) => Result;
declare const usePayloadAPI: UsePayloadAPI;
export default usePayloadAPI;
