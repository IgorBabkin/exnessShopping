import {IReducers} from 'helpers/common.interface';
import {basketReducer} from '../reducers/basket/basket.reducer';
import {combineReducers} from 'redux';
import {IAppState} from '../helpers/common.interface';

const reducers: IReducers = {
    products: (state = {}) => state,
    basket: basketReducer,
};

export default combineReducers<IAppState>(reducers);
