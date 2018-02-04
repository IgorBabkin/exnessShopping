import * as React from 'react';
import {InjectedFormProps} from 'redux-form';

export interface ILoginFormData {
    name: string;
    password: string;
}

export interface ILoginFormProps {
    onSubmit: (data: ILoginFormData) => void;
}

export type ILoginForm = React.StatelessComponent<ILoginFormProps & InjectedFormProps<ILoginFormData, ILoginFormProps>>;