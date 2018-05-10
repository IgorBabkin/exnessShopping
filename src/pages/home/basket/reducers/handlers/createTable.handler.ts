import {IProducts} from 'domain/table.interface';
import {IProduct} from '../../../../../domain/product.interface';

type ICreateTableHandler = (state: IProducts, table: IProduct) => IProducts;
const createTableHandler: ICreateTableHandler = (state, table) => [
    ...state,
    ...[table]
];

export default createTableHandler;
