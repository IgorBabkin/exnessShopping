import {Field, reduxForm} from 'redux-form';
import * as React from 'react';
import {FormTextField as TextField} from 'pages/shared/text-field.component';
import {ILoginForm, ILoginFormData, ILoginFormProps} from './loginForm.interface';
import {RaisedButton} from 'material-ui';
import './loginForm.scss';

const LoginFormComponent: ILoginForm = ({handleSubmit, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div>
                <Field
                    name="login"
                    label="Login"
                    component={TextField}
                />
            </div>
            <div>
                <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={TextField}
                    autoComplete="on"
                />
            </div>
            <RaisedButton label="Login" primary={true} className="login-form__submit-btn"/>
        </form>
    );
};

const LoginForm = reduxForm<ILoginFormData, ILoginFormProps>({
    form: 'table',
    enableReinitialize: true,
})(LoginFormComponent);

export default LoginForm