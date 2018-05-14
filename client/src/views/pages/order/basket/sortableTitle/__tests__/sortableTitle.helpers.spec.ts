import {faChevronDown} from '@fortawesome/fontawesome-free-solid';
import {getChevron} from '../sortableTitle.helpers';
import {expect} from 'chai';
import {SortDirection} from '../../../../../ui/sortable/context/sortableContext.interface';

describe('sortableTitle.helpers', () => {
    it('shows chevron down if ASC', () => {
        expect(getChevron(SortDirection.ASC)).to.equal(faChevronDown);
    });

    it('shows chevron up if DESC', () => {
        expect(getChevron(SortDirection.ASC)).to.equal(faChevronDown);
    });
});
