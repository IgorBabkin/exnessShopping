import {FloatingActionButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';
import * as React from 'react';

type IProps = {
    onClick: () => void;
}

const AddButton: React.StatelessComponent<IProps> = ({onClick}) => {
    return (
        <FloatingActionButton onClick={onClick}>
            <ContentAdd/>
        </FloatingActionButton>
    );
};

export default AddButton;