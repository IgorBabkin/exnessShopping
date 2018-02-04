import * as React from 'react';
import {ComponentClass} from 'react';
import {connect} from 'react-redux';
import TableCard from './card/tableCard.component';
import TableList from './list/tableList.component';
import {MapDispatchToProps, MapStateToProps} from 'helpers/common.interface';
import {Table, TableId} from 'domain/table.interface';
import {deleteTable} from './reducers/table.actions';
import {openForm} from '../modalForm/reducers/form.actions';

type IStateProps = {
    tables: Table[];
}

type IDispatchProps = {
    onDelete: (id: TableId) => void;
    onEdit: (id: TableId) => void;
}

type IProps = IStateProps & IDispatchProps;

const Component: React.StatelessComponent<IProps> = ({onDelete, onEdit, tables}) => {
    const ItemRenderer = ({table}) => (
        <TableCard
            table={table}
            onDelete={onDelete}
            onEdit={onEdit}
        />
    );

    return (
        <TableList
            itemRenderer={ItemRenderer}
            tables={tables}
        />
    );
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps> = dispatch => ({
    onDelete: tableId => {
        dispatch(deleteTable(tableId));
    },
    onEdit: tableId => {
        dispatch(openForm(tableId));
    }
});

const mapStateToProps: MapStateToProps<IStateProps> = state => ({
    tables: state.tables
});

export const TableListContainer: ComponentClass = connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Component);