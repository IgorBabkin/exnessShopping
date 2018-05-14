import {IAppState} from 'domain/common.interface';
import {IBasketProduct} from './list/basketTable.interface';
import {createSelector} from 'reselect';
import {IOrder} from '../../../../domain/order.interface';
import {IProducts} from '../../../../domain/product.interface';

export const basketProductsSelector =
    createSelector<IAppState, IOrder, IProducts, IBasketProduct[]>([
        state => state.basket,
        state => state.products,
    ], (basket, products) =>
        basket.map(({id, productId, count, size}) => ({
            id,
            name: products[productId].name,
            count,
            size,
        })));
