import * as React from 'react';
import './root.scss';
import {MuiThemeProvider} from 'material-ui/styles';

class Component extends React.PureComponent<any> {
    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

export const RootComponent = Component;