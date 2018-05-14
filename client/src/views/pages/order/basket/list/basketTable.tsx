import * as React from 'react';
import './basketTable.scss';
import BasketRow from '../row/basketRow.component';
import {IBasketProduct, IBasketTableProps} from './basketTable.interface';
import {Sortable, SortableContent, SortableColumn, ISort} from 'views/ui/sortable';

const BasketTable: React.StatelessComponent<IBasketTableProps> =
    ({onItemChange, onItemDelete, onItemAdd, onItemSub, products, total}) => {
        const sortBy = (key: string, sort: ISort) => () => sort(key);

        return (
            <Sortable>
                <table>
                    <thead>
                    <tr>
                        <SortableColumn>
                            {(sort) => (
                                <th onClick={sortBy('name', sort)}>Name</th>
                            )}
                        </SortableColumn>
                        <SortableColumn>
                            {(sort) => (
                                <th onClick={sortBy('size', sort)}>Size</th>
                            )}
                        </SortableColumn>
                        <SortableColumn>
                            {(sort) => (
                                <th onClick={sortBy('price', sort)}>Price</th>
                            )}
                        </SortableColumn>
                        <th>Action</th>
                        <th>Total</th>
                    </tr>
                    </thead>

                    <tfoot>
                    <tr>
                        <td>Total</td>
                        <td colSpan={4} style={{textAlign: 'right'}}>{total}</td>
                    </tr>
                    </tfoot>

                    <tbody>
                    <SortableContent data={products}>
                        {data => data.map((item: IBasketProduct) => (
                            <BasketRow
                                key={item.id}
                                product={item}
                                onAdd={onItemAdd}
                                onSub={onItemSub}
                                onEdit={onItemChange}
                                onDelete={onItemDelete}
                            />
                        ))}
                    </SortableContent>
                    </tbody>
                </table>
            </Sortable>
        );
    };

export default BasketTable;
