import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {createTable, deleteTable, updateTable} from './table.actions';
import createTableHandler from './handlers/createTable.handler';
import updateTableHandler from './handlers/updateTable.handler';
import deleteTableHandler from './handlers/deleteTable.handler';

const INITIAL_STATE = [];
const tableReducer = reducerWithInitialState(INITIAL_STATE)
    .case(createTable, createTableHandler)
    .case(updateTable, updateTableHandler)
    .case(deleteTable, deleteTableHandler);

export default tableReducer;