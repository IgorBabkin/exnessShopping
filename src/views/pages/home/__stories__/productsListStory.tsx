import * as React from 'react';
import {action} from '@storybook/addon-actions';
import ProductsList from '../productsList/list/productsList.component';
import {IProductItem} from '../productsList/item/productItem.interface';
import {Size} from 'domain/product.interface';

const products: IProductItem[] = [
    {
        id: '0',
        name: 'IPhone',
        price: 200,
        sizes: [Size.XS, Size.L],
    },
    {
        id: '1',
        name: 'Samsung',
        price: 300,
        sizes: [Size.XS, Size.L],
    },
];

const ProductsListStory = () => (
    <ProductsList
        products={products}
        onAddToBasket={action('addToBasket')}
    />
);

export default ProductsListStory;
