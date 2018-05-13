import {createEpicMiddleware} from 'redux-observable';
import {applicationEpic} from '../application.epic';
import {MockStore} from 'redux-mock-store';
// tslint:disable:no-var-requires
const createMockStore = require('redux-mock-store');
import {IAppState, IDependencies} from 'domain/common.interface';
import {AnyAction} from 'typescript-fsa';
import {ApplicationActions} from '../application.actions';
import {Mock, MockBehavior, Times} from 'moq.ts';
import {IBasketStorage} from 'services/basketStorage.interface';

describe('application.epic', () => {
    let store: MockStore<IAppState>;
    let basketStorageMock: Mock<IBasketStorage>;
    let initialState: IAppState;

    function configureMockStore() {
        basketStorageMock = new Mock<IBasketStorage>();
        const epicMiddleware = createEpicMiddleware<AnyAction, IAppState, IDependencies>(
            applicationEpic,
            {
                dependencies: createDependencies(),
            },
        );
        const mockStore = createMockStore([epicMiddleware]);
        return mockStore(initialState);
    }

    function createDependencies() {
        basketStorageMock = new Mock<IBasketStorage>();
        basketStorageMock.setBehaviorStrategy(MockBehavior.Loose);
        return {
            basketStorage: basketStorageMock.object(),
        } as IDependencies;
    }

    beforeEach(() => {
        initialState = {} as IAppState;
    });

    it('should save basket to session on unload', () => {
        const basket = [];
        initialState.basket = basket;

        store = configureMockStore();
        store.dispatch(ApplicationActions.Unload());

        basketStorageMock.verify(b => b.setState(basket), Times.Once());
    });

    it('startEpic', () => {

    });
});
