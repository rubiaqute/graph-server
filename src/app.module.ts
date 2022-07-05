import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TracksModule } from './modules/tracks/tracks.module';

import { HttpModule } from '@nestjs/axios'
import { GenresModule } from './modules/genres/genres.module';
import { join } from 'path';
import { ArtistsQueries } from './modules/artists/controller/artists.controller';
import { UsersQueries } from './modules/users/users.controller';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            resolvers: {
                Query: {
                    ...ArtistsQueries,
                    ...UsersQueries,
                },
                Artist: {
                    id: (parent) => parent._id
                },
                User: {
                    id: (parent) => parent._id
                }
            },
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