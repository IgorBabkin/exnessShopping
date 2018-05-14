import * as React from 'react';
import ProductItem from '../item/productItem';
import {IProductsListProps} from './productsList.interface';
import './productList.scss';

const ProductsList: React.StatelessComponent<IProductsListProps> =
    ({products, onAddToBasket}) => {
        return (
            <div className="row">
                {products.map(item => (
                    <div className="col-auto" key={item.id}>
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
