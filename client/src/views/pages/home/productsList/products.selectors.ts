import {IAppState} from 'domain/common.interface';
import {IProductItem} from './item/productItem.interface';
import {createSelector} from 'reselect';
import {IProducts} from '../../../../domain/product.interface';

export const productsSelector =
    createSelector<IAppState, IProducts, IProductItem[]>([
        state => state.products,
    ], products =>
        Object.keys(products).map(productId => {
            const {name, price, sizes} = products[productId];
            return {
                id: productId,
                name,
                price,
                sizes,
            };
        }));
