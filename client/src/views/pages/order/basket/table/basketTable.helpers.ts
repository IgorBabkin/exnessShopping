import {faChevronDown, faChevronUp, IconDefinition} from '@fortawesome/fontawesome-free-solid';
import {SortDirection} from 'views/ui/sortable';

export function getChevron(direction: SortDirection): IconDefinition {
    return direction === SortDirection.ASC ? faChevronDown : faChevronUp;
}
