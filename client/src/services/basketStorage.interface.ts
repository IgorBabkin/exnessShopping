import {IOrder} from '../domain/order.interface';

export interface IBasketStorage {
    setState(basket: IOrder): void;

    getState(): IOrder;
}