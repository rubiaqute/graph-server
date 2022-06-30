import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TracksModule } from './modules/tracks/tracks.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { HttpModule } from '@nestjs/axios'
import { GenresModule } from './modules/genres/genres.module';
import { join } from 'path';
import { findAll } from './main'
import { ArtistsResolver } from './modules/artists/resolvers/artists.resolver';
import { ArtistsService } from './modules/artists/services/artists.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            resolvers: {
                Query: {
                    artists: () => findAll(),
                }
            },
            // resolvers: { ArtistsResolver },
            // include: [TracksModule, ArtistsModule, GenresModule],
            typePaths: ['./**/*.graphql'],
            debug: true,
            definitions: {
                path: join(process.cwd(), './graphql.ts'),
            },
        }),
        HttpModule
    ],
})
export class AppModule { }