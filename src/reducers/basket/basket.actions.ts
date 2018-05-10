import actionCreatorFactory from 'typescript-fsa';
import {ProductId} from '../../domain/product.interface';
import {BasketItemCount} from '../../domain/basket.interface';

const actionCreator = actionCreatorFactory('Basket');

export interface IUpdateActionPayload {
    productId: ProductId;
    count: BasketItemCount;
}

export const BasketActions = {
    Add: actionCreator<ProductId>('ADD'),
    Increment: actionCreator<ProductId>('INCREMENT'),
    Decrement: actionCreator<ProductId>('DECREMENT'),
    Update: actionCreator<IUpdateActionPayload>('UPDATE'),
    Delete: actionCreator('DELETE'),
};
