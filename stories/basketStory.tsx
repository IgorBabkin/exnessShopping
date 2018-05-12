import * as React from 'react';
import {Size} from '../src/domain/product.interface';
import BasketTable from '../src/pages/order/basket/list/basketTable.component';
import {IBasketProduct} from '../src/pages/order/basket/list/basketTable.interface';
import {action} from '@storybook/addon-actions';

const products: IBasketProduct[] = [
    {
        id: 0,
        name: 'IPhone',
        size: Size.M,
        count: 2,
    },
    {
        id: 1,
        name: 'IPhone',
        size: Size.M,
        count: 2,
    },
];

const BasketStory = () => (
    <BasketTable
        products={products}
        onItemChange={action('Change')}
        onItemAdd={action('Add')}
        onItemSub={action('Sub')}
        onItemDelete={action('Delete')}
    />
);

export default BasketStory;
