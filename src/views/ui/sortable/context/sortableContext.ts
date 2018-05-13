import * as React from 'react';
import {ISortableContext, SortDirection} from './sortableContext.interface';

export const SortableContext = React.createContext<ISortableContext>({
    sort: () => {},
    key: undefined,
    direction: SortDirection.ASC,
});
