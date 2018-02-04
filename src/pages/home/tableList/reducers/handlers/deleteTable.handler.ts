import {ITablesState, TableId} from 'domain/table.interface';

type IDeleteTableHandler = (state: ITablesState, tableId: TableId) => ITablesState;
const deleteTableHandler: IDeleteTableHandler = (state, tableId) => (
    state.filter(item => item.id !== tableId)
);

export default deleteTableHandler;
