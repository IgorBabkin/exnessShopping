import {ProductId, Size} from './product.interface';

export type OrderItemId = string;

export interface IOrderItem {
    id: OrderItemId;
    productId: ProductId;
    size: Size;
    count: number;
}

export type IOrder = IOrderItem[];
