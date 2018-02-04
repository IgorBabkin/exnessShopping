import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Table} from 'domain/table.interface';
import TableList from 'pages/home/tableList/list/tableList.component';
import TableCard from 'pages/home/tableList/card/tableCard.component';

const tables: Table[] = [
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
    {
        id: 12,
        name: 'Foo fighters',
        participants: 9,
    },
];

const MyTableCard = ({table}) => (
    <TableCard
        table={table}
        onDelete={action('delete')}
        onEdit={action('edit')}
    />
);

const TableListStory = () => (
    <TableList
        tables={tables}
        itemRenderer={MyTableCard}
    />
);

export default TableListStory;