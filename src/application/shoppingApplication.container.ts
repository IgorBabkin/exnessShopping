import {connect} from 'react-redux';
import Application from './application.component';
import {IApplicationDispatchProps} from './application.interface';
import {ApplicationActions} from '../reducers/application/application.actions';

const mapDispatchToProps: IApplicationDispatchProps = {
    onStart: ApplicationActions.Start,
    onUnload: ApplicationActions.Unload,
};

export const ShoppingApplication = connect<{}, IApplicationDispatchProps>(
    undefined,
    mapDispatchToProps,
)(Application);
