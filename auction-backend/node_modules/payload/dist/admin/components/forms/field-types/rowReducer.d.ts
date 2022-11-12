export declare type Row = {
    id: string;
    collapsed?: boolean;
    blockType?: string;
};
declare type SET_ALL = {
    type: 'SET_ALL';
    data: {
        id?: string;
        blockType?: string;
    }[];
    collapsedState?: string[];
    blockType?: string;
    initCollapsed?: boolean;
};
declare type SET_COLLAPSE = {
    type: 'SET_COLLAPSE';
    id: string;
    collapsed: boolean;
};
declare type SET_ALL_COLLAPSED = {
    type: 'SET_ALL_COLLAPSED';
    collapse: boolean;
};
declare type ADD = {
    type: 'ADD';
    rowIndex: number;
    blockType?: string;
};
declare type REMOVE = {
    type: 'REMOVE';
    rowIndex: number;
};
declare type MOVE = {
    type: 'MOVE';
    moveFromIndex: number;
    moveToIndex: number;
};
declare type Action = SET_ALL | SET_COLLAPSE | SET_ALL_COLLAPSED | ADD | REMOVE | MOVE;
declare const reducer: (currentState: Row[], action: Action) => Row[];
export default reducer;
