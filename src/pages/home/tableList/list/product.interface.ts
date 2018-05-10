import {ProductId, ProductName} from '../../../../domain/product.interface';

export type ProductCount = number;
export interface IBasketProduct {
    id: ProductId;
    name: ProductName;
    count: ProductCount;
}
