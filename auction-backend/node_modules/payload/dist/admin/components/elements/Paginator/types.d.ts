export declare type Props = {
    limit?: number;
    totalPages?: number;
    page?: number;
    hasPrevPage?: boolean;
    hasNextPage?: boolean;
    prevPage?: number;
    nextPage?: number;
    numberOfNeighbors?: number;
    disableHistoryChange?: boolean;
    onChange?: (page: number) => void;
};
export declare type Node = {
    type: 'Page' | 'Separator' | 'ClickableArrow';
    props?: {
        page?: number;
        updatePage: (page?: number) => void;
        isFirstPage?: boolean;
        isLastPage?: boolean;
        isDisabled?: boolean;
        direction?: 'right' | 'left';
    };
} | number;
