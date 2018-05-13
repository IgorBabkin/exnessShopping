import {IAppState} from '../helpers/common.interface';

export function getInitialState(): IAppState {
    return {
        basket: [],
        products: {},
    };
}
