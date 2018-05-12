import * as React from 'react';
import {ISortableState} from './sortable.interface';
import {SortableContext} from './context/sortableContext';
import {calcSortDirection} from './sortable.helpers';
import {SortDirection} from './context/sortableContext.interface';

export class Sortable extends React.Component<{}, ISortableState> {
    constructor(props) {
        super(props);

        this.state = {
            key: undefined,
            sort: this.sort,
            direction: SortDirection.ASC,
        };
    }

    public render() {
        return (
            <SortableContext.Provider value={this.state}>
                {this.props.children}
            </SortableContext.Provider>
        );
    }

    private sort = (newKey: string) => {
        this.setState(({key: prevKey, direction: prevDirection}) => ({
            key: newKey,
            direction: calcSortDirection(prevKey, prevDirection, newKey),
        }));
    }
}
