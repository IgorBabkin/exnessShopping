import {MapStateToProps} from 'domain/common.interface';
import {IProductItem} from './item/productItem.interface';

export const productsSelector: MapStateToProps<IProductItem[]> =
    ({products}) => Object.keys(products).map(productId => {
        const {name, price, sizes} = products[productId];
        return {
            id: productId,
            name,
            price,
            sizes,
        };
    });
