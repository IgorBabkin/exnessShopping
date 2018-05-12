import {Action} from 'typescript-fsa';
import {Epic} from '../../helpers/common.interface';
import 'rxjs';
import 'typescript-fsa-redux-observable';
import {ApplicationActions} from './application.actions';
import {combineEpics} from 'redux-observable';

const saveBasketEpic: Epic<Action<undefined>> =
    (action$, store, {basketStorage}) =>
        action$.ofAction(ApplicationActions.Unload)
            .do(() => {
                const {basket} = store.getState();
                basketStorage.setState(basket);
            })
            .ignoreElements();

export default combineEpics(saveBasketEpic);
