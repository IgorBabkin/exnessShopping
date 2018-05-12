import * as React from 'react';
import {SortableContext} from '../context/sortableContext';
import {ISortableColumnProps} from './sortableColumn.interface';

export const SortableColumn: React.StatelessComponent<ISortableColumnProps> =
    ({children}) => {
        return (
            <SortableContext.Consumer>
                {({sort}) => children(sort)}
            </SortableContext.Consumer>
        );
    };
