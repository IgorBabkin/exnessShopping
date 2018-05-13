import {combineEpics} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';
import {IAppState, IDependencies} from 'helpers/common.interface';
import applicationEpic from 'reducers/application/application.epic';
import {productsEpic} from 'reducers/products/products.epic';

export default combineEpics<AnyAction, IAppState, IDependencies>(
    applicationEpic,
    productsEpic,
);
