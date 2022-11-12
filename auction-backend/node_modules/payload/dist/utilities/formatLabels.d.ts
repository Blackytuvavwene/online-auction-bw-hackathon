import { singular } from 'pluralize';
declare const toWords: (inputString: string, joinWords?: boolean) => string;
declare const formatLabels: (slug: string) => {
    singular: string;
    plural: string;
};
export { formatLabels, toWords, };
