import {render} from 'react-dom';
import * as React from 'react';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';
import {ShoppingApplication} from './application/shoppingApplication.container';

render(
    <Provider store={configureStore()}>
        <ShoppingApplication/>
    </Provider>,
    document.getElementById('root'),
);

// check if HMR is enabled
if (module.hot) {
    // accept itself
    module.hot.accept();
}
