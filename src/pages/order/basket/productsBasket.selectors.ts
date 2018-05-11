import {MapStateToProps} from '../../../helpers/common.interface';
import {IBasketProduct} from './list/basketTable.interface';

export const basketProductsSelector: MapStateToProps<IBasketProduct[]> =
    ({basket, products}) => basket.map(({id, productId, count, size}) => ({
        id,
        name: products[productId].name,
        count,
        size,
    }));
