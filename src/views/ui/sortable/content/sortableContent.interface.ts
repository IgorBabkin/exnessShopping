import * as React from 'react';

export type SortableData = object[];

export interface ISortableContentProps {
    data: SortableData;
    children: (data: SortableData) => React.ReactNode;
}
