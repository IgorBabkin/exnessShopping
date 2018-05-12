import {IBasketStorage} from './IBasketStorage';
import {IOrder} from '../domain/order.interface';

export class BasketStorage implements IBasketStorage {
    public setState(basket: IOrder): void {
        const data = JSON.stringify(basket);
        localStorage.setItem('basket', data);
    }

    public getState(): IOrder {
        const data = localStorage.getItem('basket');
        if (data) {
            return JSON.parse(data);
        }

        return [];
    }
}
