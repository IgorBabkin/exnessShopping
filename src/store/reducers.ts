import {IReducers} from 'helpers/common.interface';
import tableReducer from 'pages/home/basket/reducers/table.reducer';
import {basketReducer} from '../reducers/basket/basket.reducer';

const reducers: IReducers = {
    products: tableReducer,
    basket: basketReducer,
};

export default reducers;
