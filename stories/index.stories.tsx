import {storiesOf} from '@storybook/react';
import TableCardStory from './tableCardStory';
import ModalDialogStory from './modalDialogStory';
import TableListStory from './tableListStory';
import AddButtonStory from './addButtonStory';

storiesOf('UI components', module)
    .add('Table card', TableCardStory)
    .add('Modal dialog', ModalDialogStory)
    .add('Table list', TableListStory)
    .add('Add button', AddButtonStory);