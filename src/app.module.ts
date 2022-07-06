import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HttpModule } from '@nestjs/axios'
import { join } from 'path';
import { ArtistsMutation, ArtistsQueries } from './modules/artists/controller/artists.controller';
import { UsersMutations, UsersQueries } from './modules/users/users.controller';
import { AlbumsMapping, AlbumsMutation, AlbumsQueries } from './modules/albums/albums.controller';
import { GenresMutation, GenresQueries } from './modules/genres/genres.controller';
import { TracksMapping, TracksMutation, TracksQueries } from './modules/tracks/tracks.controller';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            resolvers: {
                Query: {
                    ...ArtistsQueries,
                    ...UsersQueries,
                    ...AlbumsQueries,
                    ...GenresQueries,
                    ...TracksQueries
                },
                Mutation: {
                    ...UsersMutations,
                    ...ArtistsMutation,
                    ...AlbumsMutation,
                    ...GenresMutation,
                    ...TracksMutation
                },
                Artist: {
                    id: (parent) => parent._id
                },
                Genre: {
                    id: (parent) => parent._id
                },
                Album: {
                    ...AlbumsMapping
                },
                Track: {
                    ...TracksMapping
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