import {MapStateToProps as ReduxStateToProps} from 'react-redux';
import {Reducer} from 'redux';
import {IAppState, IDependencies} from 'domain/state.interface';
import {Epic as ReduxEpic} from 'redux-observable';
import {AnyAction} from 'typescript-fsa';

export type MapStateToProps<StateProps, OwnProps = {}> = ReduxStateToProps<StateProps, OwnProps, IAppState>;
export type IReducers = {
    [key in keyof IAppState]: Reducer<IAppState[key]>
};

export type Epic<T extends AnyAction> = ReduxEpic<T, IAppState, IDependencies>;
