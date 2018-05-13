import {ProductsLoader} from '../../services/productsLoader';
import {CONNECTION_URL} from '../../config';
import {IDependencies} from '../../helpers/common.interface';
import {BasketStorage} from '../../services/basketStorage';
import {Connection} from '../../services/connection';

export function createDependencies(): IDependencies {
    const connection = new Connection(CONNECTION_URL);
    return {
        productsLoader: new ProductsLoader(connection),
        basketStorage: new BasketStorage(),
    };
}
