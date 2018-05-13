import {connect} from 'react-redux';
import ProductsList from './list/productsList.component';
import {IProductsListDispatchProps, IProductsListStateProps} from './list/productsList.interface';
import {MapStateToProps} from '../../../../helpers/common.interface';
import {BasketActions} from '../../../../reducers/basket/basket.actions';
import {productsSelector} from './products.selectors';

const mapStateToProps: MapStateToProps<IProductsListStateProps> = state => ({
    products: productsSelector(state, undefined),
});

const mapDispatchToProps: IProductsListDispatchProps = {
    onAddToBasket: BasketActions.Add,
};

export const Products = connect<IProductsListStateProps, IProductsListDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList);