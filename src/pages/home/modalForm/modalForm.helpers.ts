import {MapStateToProps} from 'helpers/common.interface';
import {createSelector} from 'reselect';
import {IState} from 'domain/state.interface';
import {ITablesState, TableId} from 'domain/table.interface';
import {find} from 'lodash';
import {ITableFormData} from './reducers/form.interface';

export const selectModalFormTitle: MapStateToProps<string> = state => {
    const {tableId} = state.tableForm;
    return tableId ? 'Edit' : 'Create';
};

export const selectModalFormInitialValues =
    createSelector<IState, TableId, ITablesState, ITableFormData>(
        [
            state => state.tableForm.tableId,
            state => state.tables,
        ], (tableId, tables) => {
            return find(tables, item => item.id === tableId);
        }
    );