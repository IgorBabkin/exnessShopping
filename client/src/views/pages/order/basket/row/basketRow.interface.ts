import {OrderItemId} from 'domain/order.interface';
import {IUpdateActionPayload} from 'reducers/basket/basket.actions';
import {IBasketProduct} from '../list/basketTable.interface';

export type BasketRowEditHandler = (data: IUpdateActionPayload) => void;
export type BasketRowDeleteHandler = (id: OrderItemId) => void;
export type BasketRowSubHandler = (id: OrderItemId) => void;
export type BasketRowAddHandler = (id: OrderItemId) => void;

export type IBasketRowProps = {
    product: IBasketProduct;
    onEdit: BasketRowEditHandler;
    onAdd: BasketRowAddHandler;
    onSub: BasketRowSubHandler;
    onDelete: BasketRowDeleteHandler;
};
