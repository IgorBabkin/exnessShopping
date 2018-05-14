import * as React from 'react';
import {Products} from './productsList/products.container';

export const HomePage: React.StatelessComponent = () => {
    return (
        <div className="pt-3 pl-3 pr-3">
            <Products/>
        </div>
    );
};
