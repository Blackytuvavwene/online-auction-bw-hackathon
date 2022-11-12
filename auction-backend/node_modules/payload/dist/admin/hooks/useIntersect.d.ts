/// <reference types="react" />
declare type Intersect = [
    setNode: React.Dispatch<Element>,
    entry: IntersectionObserverEntry
];
declare const useIntersect: ({ root, rootMargin, threshold, }?: {
    root?: any;
    rootMargin?: string;
    threshold?: number;
}) => Intersect;
export default useIntersect;
