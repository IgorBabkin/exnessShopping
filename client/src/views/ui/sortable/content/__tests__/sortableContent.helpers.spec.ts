import {sortData} from '../sortableContent.helpers';
import {expect} from 'chai';
import {SortDirection} from '../../context/sortableContext.interface';

describe('sortableContent.helpers', () => {
    it('sorts data ASC', () => {
        expect(sortData([
            {
                name: 'C',
            },
            {
                name: 'B',
            },
            {
                name: 'B',
            },
            {
                name: 'A',
            },
        ], 'name', SortDirection.ASC)).to.deep.equal([
            {
                name: 'A',
            },
            {
                name: 'B',
            },
            {
                name: 'B',
            },
            {
                name: 'C',
            },
        ]);
    });

    it('sorts data DESC', () => {
        expect(sortData([
            {
                name: 'A',
            },
            {
                name: 'B',
            },
            {
                name: 'B',
            },
            {
                name: 'C',
            },
        ], 'name', SortDirection.DESC)).to.deep.equal([
            {
                name: 'C',
            },
            {
                name: 'B',
            },
            {
                name: 'B',
            },
            {
                name: 'A',
            },
        ]);
    });
});
