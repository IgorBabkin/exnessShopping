import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Store} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';
import {IState} from 'domain/state.interface';
import {Connection} from '../services/connection';
import {CONNECTION_URL} from '../config';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default function configureStore(): Store<IState> {
    return createStore(
        combineReducers(reducers),
        composeEnhancers(applyMiddleware(thunk.withExtraArgument({
            connection: new Connection(CONNECTION_URL)
        })))
    );
}
