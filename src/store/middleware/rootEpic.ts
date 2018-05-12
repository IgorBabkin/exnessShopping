import {combineEpics} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';
import {IAppState, IDependencies} from '../../domain/state.interface';
import applicationEpic from 'reducers/application/application.epic';

export default combineEpics<AnyAction, IAppState, IDependencies>(
    applicationEpic,
);
