import * as React from 'react';
import './main.scss';
import 'react-virtualized/styles.css';

type IProps = {
    addButton: React.ComponentType,
    tableList: React.ComponentType,
    modalForm: React.ComponentType,
};

export const HomeComponent: React.StatelessComponent<IProps> = () => {
    return (
        <div className="home">
            <div>

            </div>
        </div>
    );
};
