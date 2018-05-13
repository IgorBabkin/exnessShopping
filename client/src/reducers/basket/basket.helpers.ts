import {IOrder} from 'domain/order.interface';
import {findIndex} from 'lodash';

export function distinctOrder(order: IOrder): IOrder {
    return order.reduce(
        (acc, current) => {
            const index = findIndex(acc, (item) =>
                item.size === current.size
                && item.productId === current.productId,
            );

            if (index !== -1) {
                acc[index].count += current.count;
                return acc;
            }

            return [
                ...acc,
                current,
            ];
        }, []);
}
