import * as React from 'react';
import {ComponentClass} from 'react';
import {MapDispatchToProps, MapStateToProps} from 'helpers/common.interface';
import {connect} from 'react-redux';
import {Modal} from './modal/modal.component';
import TableForm from './form/form.component';
import {submit} from 'redux-form';
import {selectModalFormInitialValues, selectModalFormTitle} from './modalForm.helpers';
import {IState} from 'domain/state.interface';
import {createSelector} from 'reselect';
import {closeForm, submitForm} from './reducers/form.actions';
import {ITableFormData} from './reducers/form.interface';

type IStateProps = {
    title: string;
    isOpened: boolean;
    initialValues?: ITableFormData;
}

type IDispatchProps = {
    onCancel: () => void;
    submitHandler: () => void;
    onSubmit: (table: ITableFormData) => void;
}

type IProps = IStateProps & IDispatchProps;

const Component: React.StatelessComponent<IProps> =
    ({submitHandler, onSubmit, title, initialValues, onCancel, isOpened}) => (
        <Modal
            title={title}
            onSubmit={submitHandler}
            onCancel={onCancel}
            isOpened={isOpened}>

            <TableForm
                initialValues={initialValues}
                onSubmit={onSubmit}
            />

        </Modal>
    );

const mapDispatchToProps: MapDispatchToProps<IDispatchProps> = dispatch => ({
    onCancel: () => {
        dispatch(closeForm());
    },
    submitHandler: () => {
        dispatch(submit('table'));
    },
    onSubmit: data => {
        dispatch(submitForm(data));
    }
});

const mapStateToProps: MapStateToProps<IStateProps> =
    createSelector<IState, ITableFormData, string, boolean, IStateProps>(
        [
            selectModalFormInitialValues,
            selectModalFormTitle,
            state => state.tableForm.isEditing,
        ], (initialValues, title, isOpened) => ({
            initialValues,
            title,
            isOpened,
        })
    );

export const ModalFormContainer: ComponentClass = connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Component);