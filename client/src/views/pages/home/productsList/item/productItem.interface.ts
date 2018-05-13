import {Money, ProductId, ProductName, Sizes} from 'domain/product.interface';
import {IAddActionPayload} from 'reducers/basket/basket.actions';

export interface IProductItem {
    id: ProductId;
    name: ProductName;
    price: Money;
    sizes: Sizes;
}

export interface IProductItemProps {
    product: IProductItem;
    onAddToBasket: AddToBasketCallback;
}

export type AddToBasketCallback = (data: IAddActionPayload) => void;
