import {ProductId} from './product.interface';

export type BasketItemCount = number;

export interface IBasketItem {
    productId: ProductId;
    count: BasketItemCount;
}

export type IBasket = IBasketItem[];
