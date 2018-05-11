import * as React from 'react';
import {Products} from './productsList/products.container';
import {Link} from 'react-router-dom';

export const HomePage: React.StatelessComponent = () => {
    return (
        <div className="home">
            <Link to="/order">Order</Link>
            <Products />
        </div>
    );
};
