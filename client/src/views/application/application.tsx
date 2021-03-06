import * as React from 'react';
import Layout from '../layout/layout';
import {Route, withRouter} from 'react-router';
import {HomePage} from '../pages/home/homePage';
import {BrowserRouter} from 'react-router-dom';
import {OrderPage} from '../pages/order/orderPage.container';
import {IApplicationProps} from './application.interface';

const RoutedLayout = withRouter(Layout);

export default class Application extends React.PureComponent<IApplicationProps> {
    componentDidMount() {
        window.addEventListener('unload', this.props.onUnload);
        this.props.onStart();
    }

    componentWillUnmount() {
        window.removeEventListener('unload', this.props.onUnload);
    }

    render() {
        return (
            <BrowserRouter basename={this.props.routerBasename}>
                <RoutedLayout>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/order" component={OrderPage} exact={true}/>
                </RoutedLayout>
            </BrowserRouter>
        );
    }
}
