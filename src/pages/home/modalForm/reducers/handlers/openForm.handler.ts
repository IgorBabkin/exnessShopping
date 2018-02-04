import {ITableFormState, TableId} from 'domain/table.interface';

type IOpenFormHandler = (state: ITableFormState, tableId?: TableId) => ITableFormState;
const openFormHandler: IOpenFormHandler = (state, tableId) => ({
    isEditing: true,
    tableId
});

export default openFormHandler;
