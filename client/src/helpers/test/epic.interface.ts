import {Action} from 'redux';
import {Store} from 'react-redux';

export interface IRunEpicOptions<S, D> {
    action: Action;
    state: S;
    dependencies: D;
}

interface IExpectEpicOptionsItemValue {
    [key: string]: Action;
}

interface IExpectEpicOptionsItem {
    marble: string,
    values: IExpectEpicOptionsItemValue,
}

export interface IExpectEpicOptions<S, D> {
    input: IExpectEpicOptionsItem;
    output: IExpectEpicOptionsItem;
    store: Store<S>,
    dependencies: D,
}
