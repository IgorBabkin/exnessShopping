import {IProductsLoader} from './productLoader.inteface';
import {IProducts} from 'domain/product.interface';
import {Observable} from 'rxjs';
import {IConnection} from './connection.interface';
import {API} from 'config';

export class ProductsLoader implements IProductsLoader {
    constructor(private connection: IConnection) {
    }

    public load(): Observable<IProducts> {
        return this.connection
            .fetch(API.products)
            .map(({response}) => response);
    }
}
