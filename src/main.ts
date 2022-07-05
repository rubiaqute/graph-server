import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { Artist } from './graphql';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

export const artistsUrl = process.env.ARTISTS_URL
export const usersUrl = process.env.USERS_URL