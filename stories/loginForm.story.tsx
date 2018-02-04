import * as React from 'react';
import {action} from '@storybook/addon-actions';
import LoginForm from 'pages/login/form/loginForm.component';

const LoginFormStory = () => (
    <LoginForm onSubmit={action('submit')}/>
);

export default LoginFormStory;
