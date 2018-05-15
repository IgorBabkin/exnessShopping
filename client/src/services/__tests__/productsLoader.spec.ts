import {assert} from 'chai';
import {ProductsLoader} from '../productsLoader';
import {API} from 'config';
import {Mock} from 'moq.ts';
import {IConnection} from '../connection.interface';
import {TestScheduler, AjaxResponse, Observable} from 'rxjs';
import {IProduct, IProducts} from 'domain/product.interface';

describe('productsLoader', () => {
    const testScheduler = new TestScheduler(assert.deepEqual);

    function setupConnectionFetch(products: IProducts, marble: string, values): Mock<IConnection> {
        const connectionFetch$ = testScheduler.createColdObservable(marble, values);
        const connectionMock = new Mock<IConnection>();
        connectionMock
            .setup(c => c.fetch(API.products))
            .returns(connectionFetch$);

        return connectionMock;
    }

    function expectObservable(observable$: Observable<any>, marble: string, values): void {
        testScheduler
            .expectObservable(observable$)
            .toBe(marble, values);
    }

    afterEach(() => {
        testScheduler.flush();
    });

    it('should load products', () => {
        const products = {3: {} as IProduct} as IProducts;
        const connectionMock = setupConnectionFetch(
            products,
            'a-|',
            {
                a: {response: products} as AjaxResponse,
            });

        const productsLoader = new ProductsLoader(connectionMock.object());

        expectObservable(
            productsLoader.load(),
            'b-|',
            {
                b: products,
            },
        );
    });
});
