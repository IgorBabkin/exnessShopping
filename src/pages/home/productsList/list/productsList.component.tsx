import * as React from 'react';
import ProductItem from '../item/productItem.component';
import {IProductsListProps} from './productsList.interface';
import './productList.scss';

const ProductsList: React.StatelessComponent<IProductsListProps> =
    ({products, onAddToBasket}) => {
        return (
            <div className="products-list">
                {products.map(item => (
                    <div className="products-list__item">
                        <ProductItem
                            product={item}
                            onAddToBasket={onAddToBasket}
                        />
                    </div>
                ))}
            </div>
        );
    };

export default ProductsList;
