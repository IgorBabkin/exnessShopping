import * as React from 'react';

export type ISortableData = object[];

export interface ISortableContentProps {
    data: ISortableData;
    children: (data: ISortableData) => React.ReactNode;
}
