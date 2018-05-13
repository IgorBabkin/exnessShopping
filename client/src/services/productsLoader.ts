import {IProductsLoader} from './productLoader.inteface';
import {IProducts} from '../domain/product.interface';
import {Observable} from 'rxjs';

export class ProductsLoader implements IProductsLoader {
    constructor(private url: string) {
    }

    load(): Observable<IProducts> {
        return Observable
            .ajax({url: `${this.url}/products`, responseType: 'json'})
            .map(({response}) => response);
    }
}
