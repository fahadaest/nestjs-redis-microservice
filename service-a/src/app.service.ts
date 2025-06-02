import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
    constructor(@Inject('REDIS_SERVICE') private client: ClientProxy) { }

    async sendNumberToServiceB(num: number): Promise<number> {
        return this.client.send('double_number', num).toPromise();
    }
}
