import * as React from 'react';
import './basketRow.scss';
import {IBasketRowProps} from './basketRow.interface';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faPlusCircle, faMinusCircle, faTrash} from '@fortawesome/fontawesome-free-solid';

class BasketRow extends React.PureComponent<IBasketRowProps> {
    private countInput: HTMLInputElement;

    render() {
        const {name, count, size, price, total} = this.props.product;

        return (
            <tr>
                <td className="align-middle">{name}</td>
                <td className="align-middle">{size}</td>
                <td className="align-middle">{price}</td>
                <td className="align-middle">
                    <div className="input-group">
                        <button className="btn btn-secondary" onClick={this.onSub}>
                            <FontAwesomeIcon icon={faMinusCircle}/>
                        </button>
                        <input
                            type="number"
                            className="form-control"
                            ref={node => this.countInput = node}
                            value={count}
                            onChange={this.onEdit}
                        />
                        <button className="btn btn-secondary" onClick={this.onAdd}>
                            <FontAwesomeIcon icon={faPlusCircle}/>
                        </button>
                        <button className="btn btn-danger" onClick={this.onDelete}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </td>
                <td className="align-middle">{total}</td>
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
