import {ProductId, Size} from './product.interface';

export type OrderItemId = number;

export interface IOrderItem {
    id: OrderItemId;
    productId: ProductId;
    size: Size;
    count: number;
}

export type IOrder = IOrderItem[];
