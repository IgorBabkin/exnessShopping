import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Table} from 'domain/table.interface';
import AddButton from 'pages/home/addButton/addButton.component';
import TableList from 'pages/home/tableList/list/tableList.component';
import {HomeComponent} from 'pages/home/main/main.component';
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

const MyAddButton = () => (
    <AddButton onClick={action('add')}/>
);

const MyTableList = () => (
    <TableList
        tables={tables}
        itemRenderer={MyTableCard}
    />
);

const WholePageStory = () => (
    <HomeComponent
        addButton={MyAddButton}
        modalForm={() => (<div/>)}
        tableList={MyTableList}
    />
);

export default WholePageStory;