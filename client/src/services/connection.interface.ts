import {IAPI} from '../config';
import {Observable, AjaxResponse} from 'rxjs';

export interface IConnection {
    fetch<K extends keyof IAPI>(path: IAPI[K]): Observable<AjaxResponse>;
}
