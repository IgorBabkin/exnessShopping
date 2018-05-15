import * as React from 'react';
import 'views/common.scss';

export const LayoutDecorator = (storyFn) => (
    <div className="container">
        <div className="row">
            <div className="col">
                {storyFn()}
            </div>
        </div>
    </div>
);
