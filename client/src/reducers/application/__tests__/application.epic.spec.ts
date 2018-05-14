import {applicationEpic} from '../application.epic';
import {IAppState, IAppStore, IDependencies} from 'domain/common.interface';
import {ApplicationActions} from '../application.actions';
import {Mock, Times} from 'moq.ts';
import {IBasketStorage} from 'services/basketStorage.interface';
import {ProductsActions} from '../../products/products.actions';
import {BasketActions} from '../../basket/basket.actions';
import {IOrder} from 'domain/order.interface';
import {createLooseMock, expectEpic, runEpic} from '../../../helpers/test';

describe('application.epic', () => {
    let basketStorageMock: Mock<IBasketStorage>;
    let dependencies: IDependencies;

    beforeEach(() => {
        basketStorageMock = createLooseMock<IBasketStorage>();
        dependencies = {
            basketStorage: basketStorageMock.object(),
        } as IDependencies;
    });

    it('should save basket to session on unload', () => {
        const basket = [];
        const state = {
            basket,
        } as IAppState;

        runEpic<IAppState, IDependencies>(applicationEpic, {
            action: ApplicationActions.Unload(),
            state,
            dependencies,
        });

        basketStorageMock.verify(b => b.setState(basket), Times.Once());
    });

    it('should restore basket and fetch products on start', () => {
        const order = [{
            id: 2,
        }] as IOrder;

        basketStorageMock
            .setup(b => b.getState())
            .returns(order);

        expectEpic<IAppState, IDependencies>(applicationEpic, {
            input: {
                marble: 'a----|',
                values: {
                    a: ApplicationActions.Start(),
                },
            },
            output: {
                marble: '(bc)-|',
                values: {
                    b: ProductsActions.Fetch.started(undefined),
                    c: BasketActions.Restore(order),
                },
            },
            store: new Mock<IAppStore>().object(),
            dependencies,
        });
    });
});
