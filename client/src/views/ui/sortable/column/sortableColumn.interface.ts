import {ISort, SortDirection} from '../context/sortableContext.interface';
import * as React from 'react';

export interface ISortableColumnProps {
    children: (sort: ISort, key: string, direction: SortDirection) => React.ReactNode;
}
