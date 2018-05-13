import {
    BasketRowAddHandler,
    BasketRowDeleteHandler,
    BasketRowEditHandler,
    BasketRowSubHandler,
} from '../row/basketRow.interface';
import {OrderItemId} from 'domain/order.interface';
import {ProductName, Size} from 'domain/product.interface';

export type ProductCount = number;

export interface IBasketProduct {
    id: OrderItemId;
    name: ProductName;
    size: Size;
    count: ProductCount;
}

export interface IBasketTableStateProps {
    products: IBasketProduct[];
}

export interface IBasketTableDispatchProps {
    onItemAdd: BasketRowAddHandler;
    onItemSub: BasketRowSubHandler;
    onItemChange: BasketRowEditHandler;
    onItemDelete: BasketRowDeleteHandler;
}

export type IBasketTableProps = IBasketTableStateProps & IBasketTableDispatchProps;
