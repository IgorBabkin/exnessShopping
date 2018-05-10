import {Connection} from '../services/connection';
import {CONNECTION_URL} from '../application/config';
import {IDependencies} from '../domain/state.interface';

export const dependencies: IDependencies = {
    connection: new Connection(CONNECTION_URL),
};
