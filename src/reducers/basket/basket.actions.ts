import actionCreatorFactory from 'typescript-fsa';
import {OrderItemId} from '../../domain/order.interface';
import {ProductId, Size} from '../../domain/product.interface';

const actionCreator = actionCreatorFactory('Basket');

export interface IAddActionPayload {
    productId: ProductId;
    size: Size;
}

export interface IUpdateActionPayload {
    id: OrderItemId;
    count: number;
}

export const BasketActions = {
    Add: actionCreator<IAddActionPayload>('ADD'),
    Increment: actionCreator<OrderItemId>('INCREMENT'),
    Decrement: actionCreator<OrderItemId>('DECREMENT'),
    Update: actionCreator<IUpdateActionPayload>('UPDATE'),
    Delete: actionCreator<OrderItemId>('DELETE'),
};
