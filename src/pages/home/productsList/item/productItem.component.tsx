import * as React from 'react';
import {SyntheticEvent} from 'react';
import {IProductItemProps} from './productItem.interface';
import './productCard.scss';
import {Size} from 'domain/product.interface';

class ProductItem extends React.PureComponent<IProductItemProps> {
    private sizeSelector: HTMLSelectElement;

    render() {
        const {id, name, price, sizes} = this.props.product;

        return (
            <form className="product-card" onSubmit={this.onSubmit}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{price}</div>
                <div>
                    <select name="size" ref={node => this.sizeSelector = node}>
                        {sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add to basket</button>
            </form>
        );
    }

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {product: {id: productId}, onAddToBasket} = this.props;

        onAddToBasket({
            productId,
            size: this.sizeSelector.value as Size,
        });
    }
}

export default ProductItem;
