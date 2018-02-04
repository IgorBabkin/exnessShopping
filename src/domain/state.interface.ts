import {ITableFormState, ITablesState} from './table.interface';
import {Store} from 'react-redux';
import {IConnection} from 'services/connection.inteface';

export interface IState {
    tables: ITablesState;
    form: any;
    tableForm: ITableFormState;
}

export type IStore = Store<IState>;

export type IDependencies = {
    connection: IConnection
}
