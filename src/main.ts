import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import AppModule from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: '*' });
  await app.listen(3000);
}

bootstrap();
