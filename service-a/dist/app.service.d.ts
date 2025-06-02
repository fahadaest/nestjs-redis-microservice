import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private client;
    constructor(client: ClientProxy);
    sendNumberToServiceB(num: number): Promise<number>;
}
