import {IProducts} from './table.interface';
import {Store} from 'react-redux';
import {IConnection} from 'services/connection.inteface';
import {IBasket} from './basket.interface';

export interface IAppState {
    products: IProducts;
    basket: IBasket;
}

export type IAppStore = Store<IAppState>;

export type IDependencies = {
    connection: IConnection,
};
