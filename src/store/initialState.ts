import {IAppState} from '../domain/state.interface';
import {Size} from '../domain/product.interface';
import {IBasketStorage} from '../services/IBasketStorage';

export function getInitialState(basketStorage: IBasketStorage): IAppState {
    return {
        basket: basketStorage.getState(),
        products: {
            0: {
                name: 'IPhone',
                price: 200,
                sizes: new Set([Size.XS, Size.S, Size.M, Size.L, Size.XL]),
            },
            1: {
                name: 'Samsung',
                price: 300,
                sizes: new Set([Size.XS, Size.S, Size.M, Size.L, Size.XL]),
            },
        },
    };
}
