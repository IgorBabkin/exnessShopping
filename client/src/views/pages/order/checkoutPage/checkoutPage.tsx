import * as React from 'react';
import {ProductsBasket} from '../basket/productsBasket.container';
import {ICheckoutPageProps} from './checkoutPage.interface';

export const CheckoutPage: React.StatelessComponent<ICheckoutPageProps> = ({hasProductsLoaded}) => {
    return (
        <div>
            {hasProductsLoaded && <ProductsBasket/>}
        </div>
    );
};
