import {render} from 'react-dom';
import * as React from 'react';
import {Application} from './bootstrap';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

render(
    <Provider store={configureStore()}>
        <Application/>
    </Provider>,
    document.getElementById('root')
);

// check if HMR is enabled
if (module.hot) {
    // accept itself
    module.hot.accept();
}