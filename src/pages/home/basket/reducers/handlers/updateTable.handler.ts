import {EditTable, IProducts} from 'domain/table.interface';

type IUpdateTableHandler = (state: IProducts, table: EditTable) => IProducts;
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
