import {basketProductsSelector} from '../productsBasket.selectors';
import {Size} from '../../../../../domain/product.interface';
import {expect} from 'chai';
import {IBasketProduct} from '../list/basketTable.interface';

describe('productsBasket.selectors', () => {
    it('selects basket item from state', () => {
        const expected = [{
            id: '0',
            name: 'phone',
            size: Size.XL,
            count: 2,
            price: 200,
        }] as IBasketProduct[];

        const actual = basketProductsSelector.resultFunc(
            [{
                id: '0',
                productId: '2',
                size: Size.XL,
                count: 2,
            }],
            {
                2: {
                    name: 'phone',
                    sizes: [Size.XL, Size.L],
                    price: 200,
                },
            },
        );

        expect(actual).to.deep.equal(expected);
    });
});
