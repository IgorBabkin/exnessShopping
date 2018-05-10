import * as React from 'react';
import './tableCard.scss';
import {IBasketProduct, ProductCount} from '../list/product.interface';
import {ProductId} from '../../../../domain/product.interface';

type IProps = {
    product: IBasketProduct;
    onEdit: (id: ProductId, count: ProductCount) => void;
    onDelete: (id: ProductId) => void;
};

const BasketRow: React.StatelessComponent<IProps> = ({product, onEdit, onDelete}) => {
    const {id, name, count} = product;

    const onEditHandler = () => onEdit(id, count);
    const onDeleteHandler = () => onDelete(id);

    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <input type="number" value={count} onChange={onEditHandler}/>
                <button onClick={onDeleteHandler}>Delete</button>
            </td>
        </tr>
    );
};

export default BasketRow;
