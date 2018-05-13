import {connect} from 'react-redux';
import {MapStateToProps} from '../../../../domain/common.interface';
import {BasketActions} from '../../../../reducers/basket/basket.actions';
import BasketTable from './list/basketTable.component';
import {IBasketTableDispatchProps, IBasketTableStateProps} from './list/basketTable.interface';
import {basketProductsSelector} from './productsBasket.selectors';

const mapStateToProps: MapStateToProps<IBasketTableStateProps> = state => ({
    products: basketProductsSelector(state, undefined),
});

const mapDispatchToProps: IBasketTableDispatchProps = {
    onItemAdd: BasketActions.Increment,
    onItemSub: BasketActions.Decrement,
    onItemChange: BasketActions.Update,
    onItemDelete: BasketActions.Delete,
};

export const ProductsBasket = connect<IBasketTableStateProps, IBasketTableDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(BasketTable);
