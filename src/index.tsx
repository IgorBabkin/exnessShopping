import {render} from 'react-dom';
import * as React from 'react';
import configureStore from 'store/configureStore';
import {Application} from 'application/application';
import {Provider} from 'react-redux';

render(
    <Provider store={configureStore()}>
        <Application/>
    </Provider>,
    document.getElementById('root'),
);

// check if HMR is enabled
if (module.hot) {
    // accept itself
    module.hot.accept();
}
