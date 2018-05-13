import * as React from 'react';
import {SortableContext} from '../context/sortableContext';
import {ISortableContentProps} from './sortableContent.interface';
import {sortData} from './sortableContent.helpers';

export const SortableContent: React.StatelessComponent<ISortableContentProps> =
    ({children, data}) => {
        return (
            <SortableContext.Consumer>
                {({direction, key}) => children(sortData(data, key, direction))}
            </SortableContext.Consumer>
        );
    };
