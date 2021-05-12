import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  //supertest라는 패키지에 request를 사용
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('home page');
  });

  //app쪽에선느 전체를 스캔하는 곳이므로 users같은 곳에 접근이 가능함
  //describe는 단순히 이름을 정의하는 것.
  describe('user', () => {
    it('GET', () => {
      //getHttpServer는 localhost 이 주소를 대체함
      return request(app.getHttpServer()).get('/user').expect(200).expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/user/join')
        .send({
          userId: 'hyeminTestcode',
          userPw: '123',
          userEmail: 'hyemin23',
        })
        .expect(201);
    });

    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/user/join')
        .send({
          userId: 'hyemin23',
          userPw: '123',
          userEmail: 'asdasd',
          other: 'test',
        })
        .expect(400);
    });
  });

  describe('/user/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/user/1').expect(200);
    });
  });
});
