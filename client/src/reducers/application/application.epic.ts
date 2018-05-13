import {Action} from 'typescript-fsa';
import {Epic} from '../../helpers/common.interface';
import 'rxjs';
import 'typescript-fsa-redux-observable';
import {ApplicationActions} from './application.actions';
import {combineEpics} from 'redux-observable';
import {BasketActions} from '../basket/basket.actions';
import {IOrder} from '../../domain/order.interface';

const unloadEpic: Epic<Action<undefined>> =
    (action$, store, {basketStorage}) =>
        action$.ofAction(ApplicationActions.Unload)
            .do(() => {
                const {basket} = store.getState();
                basketStorage.setState(basket);
            })
            .ignoreElements();

const startEpic: Epic<Action<IOrder>> =
    (action$, store, {basketStorage}) =>
        action$.ofAction(ApplicationActions.Start)
            .map(() => {
                const data = basketStorage.getState();
                return BasketActions.Restore(data);
            });

export default combineEpics(startEpic, unloadEpic);
