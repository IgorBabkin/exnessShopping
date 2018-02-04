import {storiesOf} from '@storybook/react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import * as React from 'react';
import {action} from '@storybook/addon-actions';
import LoginFormStory from './loginForm.story';
import {Modal} from 'pages/home/modalForm/modal/modal.component';
import TableForm from 'pages/home/modalForm/form/form.component';

const store = createStore(combineReducers({
    form: formReducer
}));

storiesOf('Forms', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Table Form', () => <TableForm onSubmit={action('submit')}/>)
    .add('Table Form in Dialog', () => {
        return (
            <Modal title="Create new" isOpened={true} onSubmit={action('submit')} onCancel={action('cancel')}>
                <TableForm onSubmit={action('submit')}/>
            </Modal>
        );
    }).add('Login Form', LoginFormStory);
