import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //알수없는 속성값의 요청 자체를 막아버리는 역할
      whitelist: true,
      //잘못된 property가 들어와도 400을 return 해주는 것
      forbidNonWhitelisted: true,
      //실제 타입으로 바꿔줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
