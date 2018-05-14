import {AddToBasketCallback, IProductItem} from '../item/productItem.interface';

export interface IProductsListStateProps {
    products: IProductItem[];
}

export interface IProductsListDispatchProps {
    onAddToBasket: AddToBasketCallback;
}

export type IProductsListProps = IProductsListStateProps & IProductsListDispatchProps;
