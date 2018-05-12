import {ISort} from '..';
import * as React from 'react';

export interface ISortableColumnProps {
    children: (sort: ISort) => React.ReactNode;
}
