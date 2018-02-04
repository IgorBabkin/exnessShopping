import {IConnection} from './connection.inteface';
import {IPingService} from './pingService.interface';

export class PingService implements IPingService {
    constructor(private connection: IConnection) {
    }

    startPing(): void {
        // this.connection.send()
    }

    stopPing(): void {
    }
}