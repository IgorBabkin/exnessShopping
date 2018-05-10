import {connect, MapStateToProps} from 'react-redux';
import ProductsList from './list/productsList.component';
import {IProductsListDispatchProps, IProductsListStateProps} from './list/productsList.interface';

const mapStateToProps: MapStateToProps<IProductsListStateProps, {}, {}> = state => ({
    products: [],
});

const mapDispatchToProps: IProductsListDispatchProps = {
    onAddToBasket: id => {
    },
};

export const Products = connect<IProductsListStateProps, IProductsListDispatchProps>(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList);
