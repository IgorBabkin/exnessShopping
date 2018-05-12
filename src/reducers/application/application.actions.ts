import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('Application');

export const ApplicationActions = {
    Start: actionCreator('START'),
    Unload: actionCreator('UNLOAD'),
};
