import {Observable} from 'rxjs';
import {IProducts} from 'domain/product.interface';

export interface IProductsLoader {
    load(): Observable<IProducts>;
}
