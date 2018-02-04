import actionCreatorFactory from 'typescript-fsa';
import {TableId} from 'domain/table.interface';
import {ITableFormData} from 'pages/home/modalForm/reducers/form.interface';

const actionCreator = actionCreatorFactory('TableForm');
export const openForm = actionCreator<TableId>('OPEN');
export const closeForm = actionCreator('CLOSE');
export const submitForm = actionCreator<ITableFormData>('SUBMIT');