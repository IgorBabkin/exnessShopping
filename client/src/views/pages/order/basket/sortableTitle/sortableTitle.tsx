import {getChevron} from './sortableTitle.helpers';
import {ISort, SortableColumn} from 'views/ui/sortable/index';
import * as React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {ISortableTitleProps} from './sortableTitle.interface';

export const SortableTitle: React.StatelessComponent<ISortableTitleProps> = ({sortField, children}) => {
    const sortBy = (key: string, sort: ISort) => () => sort(key);

    return (
        <SortableColumn>
            {(sort, key, direction) => (
                <th onClick={sortBy(sortField, sort)}>
                    <span className="mr-2">{children}</span>
                    {sortField === key && <FontAwesomeIcon icon={getChevron(direction)}/>}
                </th>
            )}
        </SortableColumn>
    );
};
