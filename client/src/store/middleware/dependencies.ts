import {ProductsLoader} from '../../services/productsLoader';
import {CONNECTION_URL} from '../../config';
import {IDependencies} from '../../helpers/common.interface';
import {BasketStorage} from '../../services/basketStorage';

export function createDependencies(): IDependencies {
    return {
        productsLoader: new ProductsLoader(CONNECTION_URL),
        basketStorage: new BasketStorage(),
    };
}
