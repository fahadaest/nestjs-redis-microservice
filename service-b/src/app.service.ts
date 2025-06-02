import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    doubleNumber(num: number): number {
        return num * 2;
    }
}
