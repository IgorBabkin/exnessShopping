import {IAppState} from '../domain/state.interface';

export function getInitialState(): IAppState {
    return {
        products: [
            {
                id: 0,
                name: 'IPhone',
                price: 200,
            },
            {
                id: 1,
                name: 'Samsung',
                price: 300,
            },
        ],
    } as IAppState;
}
