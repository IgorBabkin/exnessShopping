import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {closeForm, openForm} from 'pages/home/modalForm/reducers/form.actions';
import openFormHandler from './handlers/openForm.handler';
import closeFormHandler from './handlers/closeForm.handler';
import {ITableFormState} from 'domain/table.interface';

const INITIAL_STATE: ITableFormState = {
    isEditing: false
};

const tableFormReducer = reducerWithInitialState<ITableFormState>(INITIAL_STATE)
    .case(openForm, openFormHandler)
    .case(closeForm, closeFormHandler);

export default tableFormReducer;