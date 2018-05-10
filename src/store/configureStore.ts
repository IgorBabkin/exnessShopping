import {applyMiddleware, combineReducers, createStore} from 'redux';
import reducers from 'store/reducers';
import {dependencies} from './dependencies';
import {getInitialState} from './initialState';
import {IAppStore} from '../domain/state.interface';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default function configureStore(): IAppStore {
    return createStore(
        combineReducers(reducers),
        getInitialState(),
        composeEnhancers(applyMiddleware(thunk.withExtraArgument(dependencies))),
    );
}
