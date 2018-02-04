import * as React from 'react';
import TextField from 'material-ui/TextField';
import {BaseFieldProps, WrappedFieldProps} from 'redux-form';

type RenderField = BaseFieldProps & React.InputHTMLAttributes<HTMLInputElement> & WrappedFieldProps;
type IFormTextField = React.StatelessComponent<RenderField>;

export const FormTextField: IFormTextField = ({input, label, meta, ...common}) => {
    const {touched, error} = meta;
    return (
        <TextField
            fullWidth
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            type={common.type}
            autoComplete={common.autoComplete}
        />
    );
};
