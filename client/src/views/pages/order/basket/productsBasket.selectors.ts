import {IAppState} from 'domain/common.interface';
import {IBasketProduct} from './list/basketTable.interface';
import {createSelector} from 'reselect';
import {IOrder} from '../../../../domain/order.interface';
import {IProducts, Money} from '../../../../domain/product.interface';

export const basketProductsSelector =
    createSelector<IAppState, IOrder, IProducts, IBasketProduct[]>([
        state => state.basket,
        state => state.products,
    ], (basket, products) =>
        basket.map(({id, productId, count, size}) => {
            const {name, price} = products[productId];
            return {
                id,
                name,
                price,
                count,
                size,
                total: price * count,
            };
        }));

export const basketProductsTotalSelector =
    createSelector<IAppState, IOrder, IProducts, Money>([
        state => state.basket,
        state => state.products,
    ], (basket, products) =>
        basket.reduce((acc, {productId, count}) => {
            const {price} = products[productId];
            return acc + price * count;
        }, 0));
