import {reducer as formReducer} from 'redux-form';
import {IReducers} from 'helpers/common.interface';
import tableReducer from 'pages/home/tableList/reducers/table.reducer';
import tableFormReducer from 'pages/home/modalForm/reducers/form.reducer';

const reducers: IReducers = {
    tables: tableReducer,
    form: formReducer,
    tableForm: tableFormReducer
};

export default reducers;