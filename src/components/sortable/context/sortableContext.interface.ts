export type ISort = (key: string) => void;

export enum SortDirection {
    ASC,
    DESC,
}

export interface ISortableContext {
    sort: ISort;
    key: string;
    direction: SortDirection;
}
