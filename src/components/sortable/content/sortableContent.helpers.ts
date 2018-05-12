import {SortableData} from './sortableContent.interface';
import {SortDirection} from '../context/sortableContext.interface';

export function sortData(data: SortableData, key: string, direction: SortDirection): SortableData {
    return data.sort((a, b) => {
        if (a[key] === b[key]) {
            return -1;
        }

        if (direction === SortDirection.ASC) {
            return a[key] > b[key] ? 1 : 0;
        }

        return a[key] > b[key] ? 0 : 1;
    });
}
