import {IProducts, TableId} from 'domain/table.interface';

type IDeleteTableHandler = (state: IProducts, tableId: TableId) => IProducts;
const deleteTableHandler: IDeleteTableHandler = (state, tableId) => (
    state.filter(item => item.id !== tableId)
);

export default deleteTableHandler;
