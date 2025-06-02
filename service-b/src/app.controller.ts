import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getStatus(): string {
        return 'Service B is running';
    }

    @MessagePattern('double_number')
    handleDoubleNumber(num: number): number {
        console.log(`Received number from service A: ${num}`);
        return this.appService.doubleNumber(num);
    }
}
