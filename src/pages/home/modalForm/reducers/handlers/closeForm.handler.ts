import {ITableFormState, TableId} from 'domain/table.interface';

type ICloseFormHandler = (state: ITableFormState, tableId?: TableId) => ITableFormState;
const closeFormHandler: ICloseFormHandler = () => ({
    isEditing: false
});

export default closeFormHandler;
