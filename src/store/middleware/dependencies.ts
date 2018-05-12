import {Connection} from '../../services/connection';
import {CONNECTION_URL} from '../../config';
import {IDependencies} from '../../domain/state.interface';
import {BasketStorage} from '../../services/basketStorage';

export function createDependencies(): IDependencies {
    return {
        connection: new Connection(CONNECTION_URL),
        basketStorage: new BasketStorage(),
    };
}
