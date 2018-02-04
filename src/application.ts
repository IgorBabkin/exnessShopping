export const startApp = () => (dispatch, getState, connection) => {
    connection.open();
    connection.onMessage((data) => {

    });
};

export const stopApp = () => (dispatch, getState, connection) => {
    connection.close();
};
