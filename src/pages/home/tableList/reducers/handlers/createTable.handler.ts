import {ITablesState, Table} from 'domain/table.interface';

type ICreateTableHandler = (state: ITablesState, table: Table) => ITablesState;
const createTableHandler: ICreateTableHandler = (state, table) => [
    ...state,
    ...[table]
];

export default createTableHandler;
