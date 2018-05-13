import {Epic} from 'helpers/common.interface';
import 'rxjs';
import 'typescript-fsa-redux-observable';
import {combineEpics} from 'redux-observable';
import {ProductsActions} from './products.actions';

const productsFetchEpic: Epic = (action$, store, {productsLoader}) =>
    action$
        .ofAction(ProductsActions.Fetch.started)
        .mergeMapTo(
            productsLoader.load().map(data =>
                ProductsActions.Fetch.done({
                    params: undefined,
                    result: data,
                })),
        );

export const productsEpic = combineEpics(productsFetchEpic);
