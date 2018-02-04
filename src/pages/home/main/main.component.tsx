import * as React from 'react';
import './main.scss';
import 'react-virtualized/styles.css';

type IProps = {
    addButton: React.ComponentType,
    tableList: React.ComponentType,
    modalForm: React.ComponentType
}

export const HomeComponent: React.StatelessComponent<IProps> =
    ({addButton: AddButton, tableList: TableList, modalForm: ModalForm}) => {
        return (
            <div className="home">
                <div className="home__add-button">
                    <AddButton/>
                </div>

                <div className="home__table-list">
                    <TableList/>
                </div>

                <ModalForm/>
            </div>
        );
    };
