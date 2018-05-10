import actionCreatorFactory from 'typescript-fsa';
import {EditTable, TableId} from 'domain/table.interface';
import {IProduct} from '../../../../domain/product.interface';

const actionCreator = actionCreatorFactory('IProduct');

export const createTable = actionCreator<IProduct>('CREATE');
export const updateTable = actionCreator<EditTable>('UPDATE');
export const deleteTable = actionCreator<TableId>('DELETE');