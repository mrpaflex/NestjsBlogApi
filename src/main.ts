import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
//the below import done to enable us send or pass the code to production after development.
import * as dotenv from 'dotenv';
import {resolve} from 'path';
dotenv.config({path: resolve (__dirname, '.env')});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  ////app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  //you can pass in {whitelist: true} to help validate the input from users
  //await app.listen(300);///you can use this during development but use the below for production

  await app.listen(process.env.SERVER_POST);
}
bootstrap();
