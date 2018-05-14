import * as React from 'react';
import {Link} from 'react-router-dom';
import {ProductsBasket} from '../basket/productsBasket.container';
import {ICheckoutPageProps} from './checkoutPage.interface';

export const CheckoutPage: React.StatelessComponent<ICheckoutPageProps> = ({hasProductsLoaded}) => {
    return (
        <div className="home">
            <Link to="/">Home</Link>
            {hasProductsLoaded && <ProductsBasket/>}
        </div>
    );
};
