import * as React from 'react';
import './tableList.scss';
import {IBasketProduct, ProductCount} from './product.interface';
import BasketRow from '../card/tableCard.component';
import {ProductId} from '../../../../domain/product.interface';

type IProps = {
    products: IBasketProduct[];
    onItemChange: (id: ProductId, count: ProductCount) => void;
    onItemDelete: (id: ProductId) => void;
};

const BasketTable: React.StatelessComponent<IProps> = ({products, onItemChange, onItemDelete}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Product name</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {products.map(item => (
                <BasketRow
                    product={item}
                    onEdit={onItemChange}
                    onDelete={onItemDelete}
                />
            ))}
            </tbody>
        </table>
    );
};

export default BasketTable;
