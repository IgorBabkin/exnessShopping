import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {Modal} from 'pages/home/modalForm/modal/modal.component';

const ModalDialogStory = () => (
    <div>
        <Modal
            isOpened={true}
            onSubmit={action('submit')}
            onCancel={action('cancel')}
            title="Create new"
        >
            <div>Some content</div>
        </Modal>
    </div>
);

export default ModalDialogStory;
