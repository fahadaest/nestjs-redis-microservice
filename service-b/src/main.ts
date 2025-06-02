import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.REDIS,
            options: {
                host: 'localhost',
                port: 6379,
            },
        },
    );

    await app.listen();
    console.log('Service B Redis microservice is listening...');

    const appHttp = await NestFactory.create(AppModule);
    await appHttp.listen(3006);
}
bootstrap();