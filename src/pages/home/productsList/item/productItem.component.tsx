import * as React from 'react';
import {AddToBasketCallback, IProductItem} from './productItem.interface';
import './productCard.scss';

interface IProps {
    product: IProductItem;
    onAddToBasket: AddToBasketCallback;
}

const ProductItem: React.StatelessComponent<IProps> = ({product, onAddToBasket}) => {
    const {id, name, price} = product;

    const AddToBasketHandler = () => onAddToBasket(id);

    return (
        <div className="product-card">
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>
            <button onClick={AddToBasketHandler}>Add to basket</button>
        </div>
    );
};

export default ProductItem;
