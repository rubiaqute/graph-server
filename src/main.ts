import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse, } from 'axios'
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { Artist } from './graphql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

export async function findAll() {
  const httpService = new HttpService()

  const { data } = await httpService.axiosRef.get(process.env.ARTISTS_URL);
  console.log(data.items)
  return data.items
}
findAll()