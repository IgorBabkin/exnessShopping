import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import * as React from 'react';
import {ITableFormData} from '../reducers/form.interface';
import {FormTextField as TextField} from '../../../shared/text-field.component';

type IProps = {
    initialValues?: ITableFormData;
    onSubmit: (data: ITableFormData) => void;
}

const TableFormComponent: React.ComponentType<IProps & InjectedFormProps<ITableFormData, IProps>> =
    ({handleSubmit, onSubmit}) => {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Field
                        name="name"
                        label="Table name"
                        component={TextField}
                    />
                </div>
                <div>
                    <Field
                        name="participants"
                        component={TextField}
                        label="Participants"
                        type="number"
                    />
                </div>
            </form>
        );
    };

const TableForm = reduxForm<ITableFormData, IProps>({
    form: 'table',
    enableReinitialize: true,
})(TableFormComponent);

export default TableForm