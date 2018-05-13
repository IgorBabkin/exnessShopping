import {IAppState, IReducers} from 'domain/common.interface';
import {basketReducer} from 'reducers/basket/basket.reducer';
import {combineReducers} from 'redux';
import {productsReducer} from 'reducers/products/products.reducer';

const reducers: IReducers = {
    products: productsReducer,
    basket: basketReducer,
};

export default combineReducers<IAppState>(reducers);
