import {productsReducer} from '../products.reducer';
import {ProductsActions} from '../products.actions';
import {IProducts} from '../../../domain/product.interface';
import {expect} from 'chai';

describe('products.reducer', () => {
    it('puts data after fetch', () => {
        const expected = {} as IProducts;

        const actual = productsReducer({}, ProductsActions.Fetch.done({
            params: undefined,
            result: expected,
        }));

        expect(actual).to.equal(expected);
    });
});
