import * as React from 'react';
import './layout.scss';
import {Link} from 'react-router-dom';

export default class Layout extends React.PureComponent<any> {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-primary">
                    <div className="navbar-expand" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/order'} className="nav-link">Basket</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
