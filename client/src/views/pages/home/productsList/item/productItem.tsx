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
            <form className="product-card media d-flex align-items-center p-2" onSubmit={this.onSubmit}>
                <img src={require(`assets/${name.toLowerCase()}.png`)} width={100} className="mr-3"/>
                <div className="media-body">
                    <h6>{name}</h6>
                    <div className="text-black-50">Price: {price}</div>
                    <select name="size" ref={node => this.sizeSelector = node} className="custom-select mb-2">
                        {sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-raised bg-primary text-white btn-block">
                        Add to basket
                    </button>
                </div>
                <div className="clearfix"/>
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
