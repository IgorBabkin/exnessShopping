import * as React from 'react';
import './layout.scss';
import {MuiThemeProvider} from 'material-ui/styles';

export default class Layout extends React.PureComponent<any> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
