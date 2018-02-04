import * as React from 'react';
import {Table} from 'domain/table.interface';
import {action} from '@storybook/addon-actions';
import TableCard from 'pages/home/tableList/card/tableCard.component';

const table: Table = {
    id: 12,
    name: 'Foo fighters',
    participants: 9,
};

const TableCardStory = () => (
    <div style={{display: 'flex'}}>
        <TableCard
            table={table}
            onDelete={action('Delete')}
            onEdit={action('Edit')}
        />
    </div>
);

export default TableCardStory;
