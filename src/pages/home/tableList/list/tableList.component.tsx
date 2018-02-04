import * as React from 'react';
import {ComponentType} from 'react';
import {AutoSizer, Grid} from 'react-virtualized';
import {GridCellRenderer} from 'react-virtualized/dist/es/Grid';
import './tableList.scss';
import {Table} from 'domain/table.interface';

type IProps = {
    tables: Table[];
    itemRenderer: ComponentType<{ table: Table }>;
}

const TableList: React.StatelessComponent<IProps> = ({tables, itemRenderer: ItemRenderer}) => {
    const cellRenderer: GridCellRenderer = ({key, style, columnIndex}) => {
        return (
            <div key={key} style={style} className="table-list__item">
                <ItemRenderer table={tables[columnIndex]}/>
            </div>
        );
    };

    return (
        <div>
            <AutoSizer disableHeight>
                {({width}) => (
                    <Grid
                        height={230}
                        rowHeight={220}
                        rowCount={1}
                        width={width}
                        cellRenderer={cellRenderer}
                        columnCount={tables.length}
                        columnWidth={220}
                    />
                )}
            </AutoSizer>
        </div>
    );
};

export default TableList;