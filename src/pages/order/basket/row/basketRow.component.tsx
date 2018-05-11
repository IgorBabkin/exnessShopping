import * as React from 'react';
import './basketRow.scss';
import {IBasketRowProps} from './basketRow.interface';

const BasketRow: React.StatelessComponent<IBasketRowProps> = ({product, onEdit, onDelete, onAdd, onSub}) => {
    let countInput: HTMLInputElement;
    const {id, name, count, size} = product;

    const onDeleteHandler = () => onDelete(id);
    const onEditHandler = () => onEdit({
        id,
        count: parseInt(countInput.value, 10),
    });
    const onAddHandler = () => onAdd(id);
    const onSubHandler = () => onSub(id);

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{size}</td>
            <td>
                <button onClick={onSubHandler}>-</button>
                &nbsp;
                <input type="number" ref={node => countInput = node} value={count} onChange={onEditHandler}/>
                &nbsp;
                <button onClick={onAddHandler}>+</button>
                &nbsp;
                &nbsp;
                <button onClick={onDeleteHandler}>Delete</button>
            </td>
        </tr>
    );
};

export default BasketRow;
