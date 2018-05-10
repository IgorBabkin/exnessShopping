import {Money, ProductId, ProductName} from '../../../../domain/product.interface';

export interface IProductItem {
    id: ProductId;
    name: ProductName;
    price: Money;
}

export type AddToBasketCallback = (id: ProductId) => void;
