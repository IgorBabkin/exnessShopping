import {AnyAction} from 'typescript-fsa';
import {Epic} from '../../domain/common.interface';
import 'rxjs';
import 'typescript-fsa-redux-observable';
import {ApplicationActions} from './application.actions';
import {ActionsObservable, combineEpics} from 'redux-observable';
import {BasketActions} from '../basket/basket.actions';
import {ProductsActions} from '../products/products.actions';

const unloadEpic: Epic = (action$, store, {basketStorage}) =>
    action$
        .ofAction(ApplicationActions.Unload)
        .do(() => {
            const {basket} = store.getState();
            basketStorage.setState(basket);
        })
        .ignoreElements();

const startEpic: Epic = (action$, store, {basketStorage}) =>
    action$
        .ofAction(ApplicationActions.Start)
        .mergeMapTo(
            ActionsObservable.from<AnyAction>([
                BasketActions.Restore(basketStorage.getState()),
                ProductsActions.Fetch.started(undefined),
            ]),
        );

export default combineEpics(startEpic, unloadEpic);
