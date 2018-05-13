import {IConnection} from './connection.inteface';

export class Connection implements IConnection {

    constructor(private url: string) {
    }

    open(): void {
    }

    close(): void {
    }
}
