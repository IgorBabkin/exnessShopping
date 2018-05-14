import {basketReducer} from '../basket.reducer';
import {BasketActions} from '../basket.actions';
import {Size} from '../../../domain/product.interface';
import {expect} from 'chai';
import {IOrder} from '../../../domain/order.interface';

describe('basket.reducer', () => {
    it('add', () => {
        const productId = '2';
        const size = Size.XL;
        const expected = [{
            id: 0,
            count: 1,
            productId,
            size,
        }] as IOrder;

        const actual = basketReducer([], BasketActions.Add({
            productId,
            size,
        }));

        expect(actual).to.deep.equal(expected);
    });

    it('add to existing', () => {
        const productId = '2';
        const size = Size.XL;
        const expected = [{
            id: 0,
            count: 2,
            productId,
            size,
        }] as IOrder;

        const actual = basketReducer([{
            id: 0,
            count: 1,
            productId,
            size,
        }], BasketActions.Add({
            productId,
            size,
        }));

        expect(actual).to.deep.equal(expected);
    });

    it('increment', () => {
        const id = 3;
        const expected = 2;

        const actual = basketReducer([{
            id,
            count: 1,
        }] as IOrder, BasketActions.Increment(id));

        expect(actual[0].count).to.equal(expected);
    });

    it('decrement', () => {
        const id = 3;
        const expected = 0;

        const actual = basketReducer([{
            id,
            count: 1,
        }] as IOrder, BasketActions.Decrement(id));

        expect(actual[0].count).to.equal(expected);
    });

    it('delete', () => {
        const id = 3;

        const actual = basketReducer([{
            id,
            count: 1,
        }] as IOrder, BasketActions.Delete(id));

        expect(actual.length).to.equal(0);
    });
});
