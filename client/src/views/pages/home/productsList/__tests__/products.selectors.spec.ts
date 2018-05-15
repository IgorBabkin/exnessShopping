import {productsSelector} from '../products.selectors';
import {Size} from 'domain/product.interface';
import {expect} from 'chai';
import {IProductItem} from '../item/productItem.interface';

describe('products.selectors', () => {
    it('translates domain products to view model presentation', () => {
        const expected = [{
            id: '0',
            name: 'a',
            sizes: [Size.XL],
            price: 200,
        }] as IProductItem[];

        const actual = productsSelector.resultFunc({
            0: {
                name: 'a',
                sizes: [Size.XL],
                price: 200,
            },
        });

        expect(actual).to.deep.equal(expected);
    });
});
