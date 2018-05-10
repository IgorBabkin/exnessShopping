import {MapStateToProps as ReduxStateToProps} from 'react-redux';
import {Reducer} from 'redux';
import {IAppState} from 'domain/state.interface';

export type MapStateToProps<StateProps, OwnProps = {}> = ReduxStateToProps<StateProps, OwnProps, IAppState>;
export type IReducers = {
    [key in keyof IAppState]: Reducer<IAppState[key]>
};
