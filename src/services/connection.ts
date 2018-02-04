import {IConnection} from './connection.inteface';

export class Connection implements IConnection {
    private socket: SocketIOClient.Socket;

    constructor(private url: string) {
    }

    open(): void {
        this.socket = io.connect(this.url);
    }

    close(): void {
        this.socket.close();
    }
}