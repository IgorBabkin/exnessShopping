import {IProducts} from './product.interface';
import {Store} from 'react-redux';
import {IConnection} from 'services/connection.inteface';
import {IOrder} from './order.interface';

export interface IAppState {
    products: IProducts;
    basket: IOrder;
}

export type IAppStore = Store<IAppState>;

export type IDependencies = {
    connection: IConnection,
};
