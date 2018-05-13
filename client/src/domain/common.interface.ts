import {MapStateToProps as ReduxStateToProps, Store} from 'react-redux';
import {Reducer} from 'redux';
import {Epic as ReduxEpic} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';
import {IProducts} from './product.interface';
import {IOrder} from './order.interface';
import {IProductsLoader} from 'services/productLoader.inteface';
import {IBasketStorage} from 'services/basketStorage.interface';

export interface IAppState {
    products: IProducts;
    basket: IOrder;
}

export type IAppStore = Store<IAppState>;

export type IDependencies = {
    productsLoader: IProductsLoader,
    basketStorage: IBasketStorage,
};

export type MapStateToProps<StateProps, OwnProps = {}> = ReduxStateToProps<StateProps, OwnProps, IAppState>;

export type IReducers = {
    [key in keyof IAppState]: Reducer<IAppState[key]>
};

export type Epic<T extends AnyAction = AnyAction> = ReduxEpic<T, IAppState, IDependencies>;
