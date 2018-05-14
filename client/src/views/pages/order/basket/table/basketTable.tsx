import * as React from 'react';
import './basketTable.scss';
import BasketRow from '../row/basketRow.component';
import {IBasketProduct, IBasketTableProps} from './basketTable.interface';
import {Sortable, SortableContent} from 'views/ui/sortable';
import {SortableTitle} from '../sortableTitle/sortableTitle';

const BasketTable: React.StatelessComponent<IBasketTableProps> =
    ({onItemChange, onItemDelete, onItemAdd, onItemSub, products, total}) => {
        return (
            <Sortable>
                <table className="table">
                    <thead>
                    <tr className="cursor-default">
                        <SortableTitle sortField="name">Name</SortableTitle>
                        <SortableTitle sortField="size">Size</SortableTitle>
                        <SortableTitle sortField="price">Price</SortableTitle>
                        <th>Action</th>
                        <th>Total</th>
                    </tr>
                    </thead>

                    <tfoot>
                    <tr>
                        <td colSpan={4}>Total</td>
                        <td>{total}</td>
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
