import * as React from 'react';
import {Size} from 'domain/product.interface';
import BasketTable from '../basket/list/basketTable';
import {IBasketProduct} from '../basket/list/basketTable.interface';
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
        name: 'Samsung',
        size: Size.L,
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
