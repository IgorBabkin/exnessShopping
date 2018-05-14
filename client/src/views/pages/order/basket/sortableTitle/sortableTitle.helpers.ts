import {faChevronDown, faChevronUp, IconDefinition} from '@fortawesome/fontawesome-free-solid';
import {SortDirection} from '../../../../ui/sortable/context/sortableContext.interface';

export function getChevron(direction: SortDirection): IconDefinition {
    return direction === SortDirection.ASC ? faChevronDown : faChevronUp;
}
