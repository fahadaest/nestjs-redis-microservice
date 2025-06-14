"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.REDIS,
        options: {
            host: 'localhost',
            port: 6379,
        },
    });
    await app.listen();
    console.log('Service B Redis microservice is listening...');
    const appHttp = await core_1.NestFactory.create(app_module_1.AppModule);
    await appHttp.listen(3006);
}
bootstrap();
//# sourceMappingURL=main.js.map