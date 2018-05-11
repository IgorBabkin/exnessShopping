import {IReducers} from 'helpers/common.interface';
import {basketReducer} from '../reducers/basket/basket.reducer';

const reducers: IReducers = {
    products: (state = {}) => state,
    basket: basketReducer,
};

export default reducers;
