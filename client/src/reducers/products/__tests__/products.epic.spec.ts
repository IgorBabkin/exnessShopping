import {IAppState, IAppStore, IDependencies} from 'domain/common.interface';
import {Mock} from 'moq.ts';
import {ProductsActions} from '../products.actions';
import {createLooseMock, expectEpic} from '../../../helpers/test';
import {productsEpic} from '../products.epic';
import {IProductsLoader} from 'services/productsLoader.inteface';
import {IProducts, IProduct} from 'domain/product.interface';
import {Observable} from 'rxjs';

describe('products.epic', () => {
    let productsLoaderMock: Mock<IProductsLoader>;
    let dependencies: IDependencies;

    beforeEach(() => {
        productsLoaderMock = createLooseMock<IProductsLoader>();
        dependencies = {
            productsLoader: productsLoaderMock.object(),
        } as IDependencies;
    });

    it('should load products and return done action', () => {
        const products = {
            3: {} as IProduct,
        } as IProducts;

        productsLoaderMock
            .setup(b => b.load())
            .returns(Observable.from([
                products,
            ]));

        expectEpic<IAppState, IDependencies>(productsEpic, {
            input: {
                marble: 'a-|',
                values: {
                    a: ProductsActions.Fetch.started(undefined),
                },
            },
            output: {
                marble: 'b-|',
                values: {
                    b: ProductsActions.Fetch.done({
                        params: undefined,
                        result: products,
                    }),
                },
            },
            store: new Mock<IAppStore>().object(),
            dependencies,
        });
    });
});
