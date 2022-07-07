import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

export const artistsUrl = process.env.ARTISTS_URL
export const usersUrl = process.env.USERS_URL
export const albumsUrl = process.env.ALBUMS_URL
export const genresUrl = process.env.GENRES_URL
export const tracksUrl = process.env.TRACKS_URL
export const bandsUrl = process.env.BANDS_URL
export const favouritesUrl = process.env.FAVOURITES_URL