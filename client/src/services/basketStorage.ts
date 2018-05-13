import {IBasketStorage} from './basketStorage.interface';
import {IOrder} from '../domain/order.interface';

export class BasketStorage implements IBasketStorage {
    constructor(private storage: Storage) {
    }

    public setState(basket: IOrder): void {
        const data = JSON.stringify(basket);
        this.storage.setItem('basket', data);
    }

    public getState(): IOrder {
        const data = this.storage.getItem('basket');
        if (data) {
            return JSON.parse(data);
        }

        return [];
    }
}
