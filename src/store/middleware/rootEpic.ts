import {combineEpics} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';
import {IDependencies} from '../../helpers/common.interface';
import applicationEpic from 'reducers/application/application.epic';
import {IAppState} from '../../helpers/common.interface';

export default combineEpics<AnyAction, IAppState, IDependencies>(
    applicationEpic,
);
