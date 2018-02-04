import {EditTable, ITablesState} from 'domain/table.interface';

type IUpdateTableHandler = (state: ITablesState, table: EditTable) => ITablesState;
const updateTableHandler: IUpdateTableHandler = (state, table) => (
    state.map(item => {
        if (table.id === item.id) {
            return {
                ...item,
                ...table
            };
        }
        return item;
    })
);

export default updateTableHandler;
