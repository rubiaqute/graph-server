
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface UpdateAlbum {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    tracksIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateArtist {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    country?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface UpdateBand {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface UpdateGenre {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateTrack {
    title?: Nullable<string>;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface Album {
    id: string;
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Album>[]> | Promise<Nullable<Nullable<Album>[]>>;
    album(id?: Nullable<string>): Nullable<Album> | Promise<Nullable<Album>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    artist(id?: Nullable<string>): Nullable<Artist> | Promise<Nullable<Artist>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    band(id?: Nullable<string>): Nullable<Band> | Promise<Nullable<Band>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    genre(id?: Nullable<string>): Nullable<Genre> | Promise<Nullable<Genre>>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    track(id?: Nullable<string>): Nullable<Track> | Promise<Nullable<Track>>;
    user(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<Token> | Promise<Nullable<Token>>;
}

export interface IMutation {
    createAlbum(name: string, released?: Nullable<number>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, tracksIds?: Nullable<Nullable<string>[]>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Album> | Promise<Nullable<Album>>;
    deleteAlbum(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    updateAlbum(id: string, album?: Nullable<UpdateAlbum>): Nullable<Album> | Promise<Nullable<Album>>;
    createArtist(firstName: string, secondName: string, country: string, middleName?: Nullable<string>, birthDate?: Nullable<string>, birthPlace?: Nullable<string>, bandsIds?: Nullable<Nullable<string>[]>, instruments?: Nullable<Nullable<string>[]>): Nullable<Artist> | Promise<Nullable<Artist>>;
    deleteArtist(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    updateArtist(id: string, artist?: Nullable<UpdateArtist>): Nullable<Artist> | Promise<Nullable<Artist>>;
    createBand(name?: Nullable<string>, origin?: Nullable<string>, members?: Nullable<Nullable<MemberInput>[]>, website?: Nullable<string>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    updateBand(id: string, band?: Nullable<UpdateBand>): Nullable<Band> | Promise<Nullable<Band>>;
    createGenre(name: string, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    updateGenre(id: string, genre?: Nullable<UpdateGenre>): Nullable<Genre> | Promise<Nullable<Genre>>;
    createTrack(title: string, albumId?: Nullable<string>, artistsIds?: Nullable<Nullable<string>[]>, bandsIds?: Nullable<Nullable<string>[]>, duration?: Nullable<number>, released?: Nullable<number>, genresIds?: Nullable<Nullable<string>[]>): Nullable<Track> | Promise<Nullable<Track>>;
    deleteTrack(id: string): Nullable<DeleteResult> | Promise<Nullable<DeleteResult>>;
    updateTrack(id: string, track?: Nullable<UpdateTrack>): Nullable<Track> | Promise<Nullable<Track>>;
    register(firstName: string, password: string, email: string, lastName?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Artist {
    id: string;
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country: string;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface DeleteResult {
    deletedCount?: Nullable<number>;
    acknowledged?: Nullable<boolean>;
}

export interface Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Member {
    artist?: Nullable<Artist>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    id: string;
    firstName: string;
    lastName?: Nullable<string>;
    password: string;
    email: string;
}

export interface Token {
    jwt: string;
}

type Nullable<T> = T | null;
