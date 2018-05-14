import {ISortableData} from './sortableContent.interface';
import {SortDirection} from '../context/sortableContext.interface';

export function sortData(data: ISortableData, key: string, direction: SortDirection): ISortableData {
    return data.sort((a, b) => {
        if (a[key] === b[key]) {
            return 0;
        }

        if (direction === SortDirection.ASC) {
            return a[key] > b[key] ? 1 : -1;
        }

        return a[key] > b[key] ? -1 : 1;
    });
}
