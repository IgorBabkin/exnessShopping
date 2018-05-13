import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {IProducts} from 'domain/product.interface';
import {ProductsActions} from './products.actions';

export const productsReducer = reducerWithInitialState<IProducts>({})
    .case(ProductsActions.Fetch.done, (state, payload) => payload.result);
