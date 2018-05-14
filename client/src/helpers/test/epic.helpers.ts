import {assert} from 'chai';
import {AnyAction} from 'typescript-fsa';
import {ActionsObservable, createEpicMiddleware, Epic} from 'redux-observable';
import {TestScheduler} from 'rxjs';
import {Action} from 'redux';
import {IExpectEpicOptions, IRunEpicOptions} from './epic.interface';
// tslint:disable:no-var-requires
const createMockStore = require('redux-mock-store');

export function expectEpic<S, D>(epic: Epic<Action, S, D>, options: IExpectEpicOptions<S, D>): void {
    const {input, output, store, dependencies} = options;
    const testScheduler = new TestScheduler(assert.deepEqual);

    const action$ = ActionsObservable.from<AnyAction>(
        testScheduler.createHotObservable(input.marble, input.values),
    );

    testScheduler
        .expectObservable(epic(action$, store, dependencies))
        .toBe(output.marble, output.values);
}

export function runEpic<S, D>(epic: Epic<Action, S, D>, options: IRunEpicOptions<S, D>): void {
    const {action, state, dependencies} = options;
    const epicMiddleware = createEpicMiddleware<Action, S, D>(epic, {dependencies});
    const mockStore = createMockStore([epicMiddleware]);
    const store = mockStore(state);
    store.dispatch(action);
}
