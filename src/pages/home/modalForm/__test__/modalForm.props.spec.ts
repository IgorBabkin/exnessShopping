import {expect} from 'chai';
import {IState} from 'domain/state.interface';
import {selectModalFormInitialValues, selectModalFormTitle} from '../modalForm.helpers';
import {Table} from 'domain/table.interface';

describe('modalForm.props', () => {
    let state: IState = {} as IState;

    beforeEach(() => {
        state = {
            tables: {},
            tableForm: {}
        } as IState;
    });

    it('title should be "Edit" if tableId exists', () => {
        state.tableForm.tableId = 3;

        const title = selectModalFormTitle(state);

        expect(title).to.equal('Edit');
    });

    it('title should be "New" if tableId does not exist', () => {
        const title = selectModalFormTitle(state);

        expect(title).to.equal('Create');
    });

    it('should take table from tables by TableId', () => {
        const tableId = 7;
        const expectedTable = {id: tableId} as Table;
        const tables = [
            {id: 6} as Table,
            expectedTable
        ];

        const resultFunc = selectModalFormInitialValues.resultFunc;

        expect(resultFunc(tableId, tables)).to.equal(expectedTable);
    });
});