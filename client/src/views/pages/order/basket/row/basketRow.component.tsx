import * as React from 'react';
import './basketRow.scss';
import {IBasketRowProps} from './basketRow.interface';

class BasketRow extends React.PureComponent<IBasketRowProps> {
    private countInput: HTMLInputElement;

    render() {
        const {name, count, size, price, total} = this.props.product;

        return (
            <tr>
                <td>{name}</td>
                <td>{size}</td>
                <td>{price}</td>
                <td>
                    <button onClick={this.onSub}>-</button>
                    &nbsp;
                    <input type="number" ref={node => this.countInput = node} value={count} onChange={this.onEdit}/>
                    &nbsp;
                    <button onClick={this.onAdd}>+</button>
                    &nbsp;
                    &nbsp;
                    <button onClick={this.onDelete}>Delete</button>
                </td>
                <td>{total}</td>
            </tr>
        );
    }

    private onDelete = () => {
        const {product: {id}, onDelete} = this.props;
        onDelete(id);
    }

    private onAdd = () => {
        const {product: {id}, onAdd} = this.props;
        onAdd(id);
    }

    private onSub = () => {
        const {product: {id}, onSub} = this.props;
        onSub(id);
    }

    private onEdit = () => {
        const {product: {id}, onEdit} = this.props;
        onEdit({
            id,
            count: parseInt(this.countInput.value, 10),
        });
    }
}

export default BasketRow;
