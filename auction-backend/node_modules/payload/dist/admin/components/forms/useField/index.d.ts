import { Options, FieldType } from './types';
declare const useField: <T extends unknown>(options: Options) => FieldType<T>;
export default useField;
