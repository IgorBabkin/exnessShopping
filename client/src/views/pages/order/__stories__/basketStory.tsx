import * as React from 'react';
import {Size} from 'domain/product.interface';
import BasketTable from '../basket/table/basketTable';
import {IBasketProduct} from '../basket/table/basketTable.interface';
import {action} from '@storybook/addon-actions';

const products: IBasketProduct[] = [
    {
        id: '0',
        name: 'IPhone',
        size: Size.M,
        count: 2,
        price: 200,
        total: 2 * 200,
    },
    {
        id: '1',
        name: 'Samsung',
        size: Size.L,
        count: 2,
        price: 300,
        total: 2 * 300,
    },
];

const BasketStory = () => (
    <BasketTable
        products={products}
        total={500}
        onItemChange={action('Change')}
        onItemAdd={action('Add')}
        onItemSub={action('Sub')}
        onItemDelete={action('Delete')}
    />
);

export default BasketStory;
