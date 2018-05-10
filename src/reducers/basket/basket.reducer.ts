import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {BasketActions, IUpdateActionPayload} from './basket.actions';
import {IBasket} from '../../domain/basket.interface';
import {ProductId} from '../../domain/product.interface';
import {find} from 'lodash';

export const basketReducer = reducerWithInitialState<IBasket>([])
    .case(BasketActions.Add, addItemHandler)
    .case(BasketActions.Increment, incrementItemHandler)
    .case(BasketActions.Update, updateItemHandler)
    .case(BasketActions.Decrement, decrementItemHandler)
    .case(BasketActions.Delete, deleteItemHandler);

function addItemHandler(state: IBasket, productId: ProductId): IBasket {
    const basketItem = find(state, item => item.productId === productId);

    if (basketItem) {
        return incrementItemHandler(state, productId);
    }

    return [
        ...state,
        {
            productId,
            count: 1,
        },
    ];
}

function incrementItemHandler(state: IBasket, productId: ProductId): IBasket {
    return state.map(item => {
        if (item.productId === productId) {
            return {
                ...item,
                count: item.count + 1,
            };
        }

        return item;
    });
}

function decrementItemHandler(state: IBasket, productId: ProductId): IBasket {
    return state.map(item => {
        if (item.productId === productId) {
            return {
                ...item,
                count: Math.max(item.count - 1, 0),
            };
        }

        return item;
    });
}

function updateItemHandler(state: IBasket, {productId, count}: IUpdateActionPayload): IBasket {
    return state.map(item => {
        if (item.productId === productId) {
            return {
                ...item,
                count: Math.max(count, 0),
            };
        }

        return item;
    });
}

function deleteItemHandler(state: IBasket, productId: ProductId): IBasket {
    return state.filter(item => item.productId !== productId);
}
