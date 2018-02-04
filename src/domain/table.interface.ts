export type TableId = number;

export interface NewTable {
    participants: number;
    name: string;
}

export interface Table extends NewTable {
    id: TableId;
}

export type EditTable = Pick<Table, 'id'> & Partial<Table>;

export type ITablesState = Table[];

export type ITableFormState = {
    isEditing: boolean;
    tableId?: TableId
};
