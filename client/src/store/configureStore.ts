import {createStore} from 'redux';
import {getInitialState} from './initialState';
import {IAppStore} from '../helpers/common.interface';
import rootReducer from './rootReducer';
import {createMiddleware} from './middleware';
import {createDependencies} from './middleware/dependencies';

export default function configureStore(): IAppStore {
    const dependencies = createDependencies();
    return createStore(
        rootReducer,
        getInitialState(),
        createMiddleware(dependencies),
    );
}
