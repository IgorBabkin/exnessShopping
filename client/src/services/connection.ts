import {IConnection} from './connection.interface';
import {Observable, AjaxResponse} from 'rxjs';
import {IAPI} from 'config';

export class Connection implements IConnection {
    constructor(private url: string) {
    }

    public fetch<K extends keyof IAPI>(path: IAPI[K]): Observable<AjaxResponse> {
        return Observable
            .ajax({
                url: `${this.url}${path}`,
                responseType: 'json',
            });
    }
}
