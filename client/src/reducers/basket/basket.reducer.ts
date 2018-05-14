import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {BasketActions, IAddActionPayload, IUpdateActionPayload} from './basket.actions';
import {IOrder, OrderItemId} from 'domain/order.interface';
import {distinctOrder} from './basket.helpers';
var shortid = require('shortid');

export const basketReducer = reducerWithInitialState<IOrder>([])
    .case(BasketActions.Add, addItemHandler)
    .case(BasketActions.Increment, incrementItemHandler)
    .case(BasketActions.Update, updateItemHandler)
    .case(BasketActions.Decrement, decrementItemHandler)
    .case(BasketActions.Restore, (state, payload) => payload)
    .case(BasketActions.Delete, deleteItemHandler);

function addItemHandler(state: IOrder, payload: IAddActionPayload): IOrder {
    return distinctOrder([
        ...state,
        {
            id: shortid.generate(),
            count: 1,
            ...payload,
        },
    ]);
}

function incrementItemHandler(state: IOrder, id: OrderItemId): IOrder {
    return state.map(item => {
        if (item.id === id) {
            return {
                ...item,
                count: item.count + 1,
            };
        }

        return item;
    });
}

function decrementItemHandler(state: IOrder, id: OrderItemId): IOrder {
    return state.map(item => {
        if (item.id === id) {
            return {
                ...item,
                count: Math.max(item.count - 1, 0),
            };
        }

        return item;
    });
}

function updateItemHandler(state: IOrder, {id, count}: IUpdateActionPayload): IOrder {
    return state.map(item => {
        if (item.id === id) {
            return {
                ...item,
                count: Math.max(count, 0),
            };
        }

        return item;
    });
}

function deleteItemHandler(state: IOrder, id: OrderItemId): IOrder {
    return state.filter(item => item.id !== id);
}
