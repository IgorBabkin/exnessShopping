import actionCreatorFactory from 'typescript-fsa';
import {EditTable, Table, TableId} from 'domain/table.interface';

const actionCreator = actionCreatorFactory('Table');

export const createTable = actionCreator<Table>('CREATE');
export const updateTable = actionCreator<EditTable>('UPDATE');
export const deleteTable = actionCreator<TableId>('DELETE');