import * as React from 'react';
import {Dialog, FlatButton} from 'material-ui';

type IProps = {
    isOpened: boolean;
    onCancel: () => void;
    onSubmit: () => void;
    title: string;
}


export const Modal: React.StatelessComponent<IProps> = ({isOpened, children, onCancel, onSubmit, title}) => {
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={onCancel}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={onSubmit}
        />,
    ];

    return (
        <Dialog
            title={title}
            actions={actions}
            modal={false}
            open={isOpened}
            onRequestClose={onCancel}
        >
            {children}
        </Dialog>
    );
};