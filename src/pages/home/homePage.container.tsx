import * as React from 'react';
import {ComponentClass, StatelessComponent} from 'react';
import {HomeComponent} from './main/main.component';
import {TableListContainer} from './tableList/tableList.container';
import {ModalFormContainer} from './modalForm/modalForm.container';
import AddButton from './addButton/addButton.component';
import {connect} from 'react-redux';
import {MapDispatchToProps} from 'helpers/common.interface';
import {openForm} from './modalForm/reducers/form.actions';

type IDispatchProps = {
    onAdd: () => void;
}

type IProps = IDispatchProps;

export const Component: StatelessComponent<IProps> = ({onAdd}) => {
    const AddButtonContainer = () => (
        <AddButton onClick={onAdd}/>
    );

    return (
        <HomeComponent
            addButton={AddButtonContainer}
            tableList={TableListContainer}
            modalForm={ModalFormContainer}
        />
    );
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps> = dispatch => ({
    onAdd: () => {
        dispatch(openForm(undefined));
    }
});

export const HomePage: ComponentClass = connect<{}, IDispatchProps>(
    undefined,
    mapDispatchToProps
)(Component);