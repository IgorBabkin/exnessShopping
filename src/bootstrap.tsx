import * as React from 'react';
import {connect} from 'react-redux';
import {RootComponent} from './pages/root.component';
import {Route, withRouter} from 'react-router';
import {startApp, stopApp} from './application';
import {HomePage} from './pages/home/homePage.container';
import {LoginPage} from './pages/login/login.component';
import {BrowserRouter} from 'react-router-dom';

type IDispatchProps = {
    onStart: () => void;
    onStop: () => void;
}

const Root = withRouter(RootComponent);

class Component extends React.PureComponent<IDispatchProps> {

    componentDidMount() {
        this.props.onStart();
    }

    componentWillUnmount() {
        this.props.onStop();
    }

    render() {
        return (
            <BrowserRouter>
                <Root>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/login" component={LoginPage} exact={true}/>
                </Root>
            </BrowserRouter>
        );
    }
}

export const Application = connect<{}, IDispatchProps>(undefined, {
    onStart: startApp,
    onStop: stopApp
})(Component);
