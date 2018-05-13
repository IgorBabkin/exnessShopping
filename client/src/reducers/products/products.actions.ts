import actionCreatorFactory from 'typescript-fsa';
import {IProducts} from 'domain/product.interface';

const actionCreator = actionCreatorFactory('Products');

export const ProductsActions = {
    Fetch: actionCreator.async<{}, IProducts>('FETCH'),
};
