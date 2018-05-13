import {BasketStorage} from '../basketStorage';
import {Mock, MockBehavior} from 'moq.ts';
import {IOrder} from 'domain/order.interface';
import {expect} from 'chai';

describe('basketStorage', () => {
    let storageMock: Mock<Storage>;
    const basket = [{
        id: 3,
    }] as IOrder;

    beforeEach(() => {
        storageMock = new Mock<Storage>();
        storageMock.setBehaviorStrategy(MockBehavior.Loose);
    });

    it('save to storage', () => {
        const basketStorage = new BasketStorage(storageMock.object());
        basketStorage.setState(basket);

        storageMock.verify(s => s.setItem('basket', JSON.stringify(basket)));
    });

    it('restore from storage', () => {
        storageMock
            .setup(s => s.getItem('basket'))
            .returns(JSON.stringify(basket));

        const basketStorage = new BasketStorage(storageMock.object());
        const actual = basketStorage.getState();

        expect(actual).to.deep.equal(basket);
    });

    it('return empty array if storage is empty', () => {
        const basketStorage = new BasketStorage(storageMock.object());
        const actual = basketStorage.getState();

        expect(actual).to.deep.equal([]);
    });
});
