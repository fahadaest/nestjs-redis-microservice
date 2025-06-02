import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Service-A E2E', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/double/4 (GET) should return 8', () => {
    return request(app.getHttpServer())
      .get('/double/4')
      .expect(200)
      .expect('8');
  });

  afterAll(async () => {
    await app.close();
  });
});
