import * as React from 'react';
import {LayoutComponent} from 'pages/layout/layout.component';
import {Route, withRouter} from 'react-router';
import {HomePage} from 'pages/home/homePage.component';
import {BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {startApp, stopApp} from './application.helpers';
import {OrderPage} from '../pages/order/checkoutPage.component';

type IProps = {
    onStart: () => void;
    onStop: () => void;
};

const Layout = withRouter(LayoutComponent);

class Component extends React.PureComponent<IProps> {
    componentDidMount() {
        this.props.onStart();
    }

    componentWillUnmount() {
        this.props.onStop();
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/order" component={OrderPage} exact={true}/>
                </Layout>
            </BrowserRouter>
        );
    }
}

export const Application = connect<{}, IProps>(undefined, {
    onStart: startApp,
    onStop: stopApp,
})(Component);
