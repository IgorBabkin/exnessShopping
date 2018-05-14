import {connect} from 'react-redux';
import {MapStateToProps} from 'domain/common.interface';
import {CheckoutPage} from './checkoutPage/checkoutPage';
import {ICheckoutPageStateProps} from './checkoutPage/checkoutPage.interface';

const mapStateToProps: MapStateToProps<ICheckoutPageStateProps> = state => ({
    hasProductsLoaded: Object.keys(state.products).length > 0,
});

export const OrderPage = connect<ICheckoutPageStateProps>(
    mapStateToProps,
)(CheckoutPage);
