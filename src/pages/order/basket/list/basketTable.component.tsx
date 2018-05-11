import * as React from 'react';
import './basketTable.scss';
import BasketRow from '../row/basketRow.component';
import {IBasketTableProps} from './basketTable.interface';

const BasketTable: React.StatelessComponent<IBasketTableProps> =
    ({products, onItemChange, onItemDelete, onItemAdd, onItemSub}) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product name</th>
                    <th>Size</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map(item => (
                    <BasketRow
                        key={item.id}
                        product={item}
                        onAdd={onItemAdd}
                        onSub={onItemSub}
                        onEdit={onItemChange}
                        onDelete={onItemDelete}
                    />
                ))}
                </tbody>
            </table>
        );
    };

export default BasketTable;
