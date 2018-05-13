import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import rootEpic from './rootEpic';
import {createEpicMiddleware} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';
import {IDependencies} from 'domain/common.interface';
import {IAppState} from 'domain/common.interface';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export function createMiddleware(dependencies: IDependencies) {
    const epicMiddleware = createEpicMiddleware<AnyAction, IAppState, IDependencies>(
        rootEpic,
        {
            dependencies,
        },
    );

    return composeEnhancers(applyMiddleware(epicMiddleware));
}
