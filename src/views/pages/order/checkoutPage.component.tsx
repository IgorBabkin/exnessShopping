import * as React from 'react';
import {ProductsBasket} from './basket/productsBasket.container';
import {Link} from 'react-router-dom';

export const OrderPage: React.StatelessComponent = () => {
    return (
        <div className="home">
            <Link to="/">Home</Link>
            <ProductsBasket />
        </div>
    );
};
