import {calcSortDirection} from '../sortable.helpers';
import {SortDirection} from '../context/sortableContext.interface';
import {expect} from 'chai';

describe('sortable.helpers', () => {
    it('sets ASC if change sort field', () => {
        const actual = calcSortDirection(undefined, undefined, 'name');

        expect(actual).to.equal(SortDirection.ASC);
    });

    it('toggles sort direction on the same field', () => {
        expect(calcSortDirection('name', SortDirection.ASC, 'name'))
            .to.equal(SortDirection.DESC);

        expect(calcSortDirection('name', SortDirection.DESC, 'name'))
            .to.equal(SortDirection.ASC);
    });
});
