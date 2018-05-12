import {SortDirection} from './context/sortableContext.interface';

export function calcSortDirection(prevKey, prevDirection, newKey): SortDirection {
    if (prevKey === newKey) {
        return prevDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
    }

    return SortDirection.ASC;
}
