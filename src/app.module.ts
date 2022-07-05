import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TracksModule } from './modules/tracks/tracks.module';

import { HttpModule } from '@nestjs/axios'
import { GenresModule } from './modules/genres/genres.module';
import { join } from 'path';
import { ArtistsMutation, ArtistsQueries } from './modules/artists/controller/artists.controller';
import { UsersMutations, UsersQueries } from './modules/users/users.controller';
import { AlbumsMapping, AlbumsMutation, AlbumsQueries } from './modules/albums/albums.controller';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            resolvers: {
                Query: {
                    ...ArtistsQueries,
                    ...UsersQueries,
                    ...AlbumsQueries,
                },
                Mutation: {
                    ...UsersMutations,
                    ...ArtistsMutation,
                    ...AlbumsMutation,
                },
                Artist: {
                    id: (parent) => parent._id
                },
                Album: {
                    ...AlbumsMapping
                },
                User: {
                    id: (parent) => parent._id
                }
            },
            context: ({ req }) => {
                const token = req.headers.authorization || '';

                return { token };
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