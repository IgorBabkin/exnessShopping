import {Dispatch} from 'react-redux';
import {Selector} from 'reselect';
import {Reducer} from 'redux';
import {IState} from 'domain/state.interface';

export type MapStateToProps<R> = Selector<IState, R>;
export type MapDispatchToProps<P> = (dispatch: Dispatch<IState>) => P;
export type IReducers = {
    [key in keyof IState]: Reducer<IState[key]>
    }