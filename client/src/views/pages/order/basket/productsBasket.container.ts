import {connect} from 'react-redux';
import {MapStateToProps} from 'domain/common.interface';
import {BasketActions} from 'reducers/basket/basket.actions';
import BasketTable from './table/basketTable';
import {IBasketTableDispatchProps, IBasketTableStateProps} from './table/basketTable.interface';
import {basketProductsSelector, basketProductsTotalSelector} from './productsBasket.selectors';

const mapStateToProps: MapStateToProps<IBasketTableStateProps> = state => ({
    products: basketProductsSelector(state),
    total: basketProductsTotalSelector(state),
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
