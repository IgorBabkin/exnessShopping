import * as React from 'react';
import {action} from '@storybook/addon-actions';
import AddButton from 'pages/home/addButton/addButton.component';

const AddButtonStory = () => (
    <AddButton onClick={action('add')}/>
);

export default AddButtonStory;
