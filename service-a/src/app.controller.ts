import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('double/:num')
    async doubleNumber(@Param('num') num: number) {
        return this.appService.sendNumberToServiceB(+num);
    }
}