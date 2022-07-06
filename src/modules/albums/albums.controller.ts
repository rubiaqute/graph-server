import { findByIdArtists } from "../artists/service/artists.service"
import { findByIdBands } from "../bands/bands.service"
import { findByIdGenre } from "../genres/genres.service"
import { findByIdTracks } from "../tracks/tracks.service"
import { addAlbum, deleteOne, findAll, findByIdAlbums, updateOne } from "./albums.service"

export const AlbumsQueries = {
    albums: (parent, data) => findAll(data),
    album: (parent, data) => findByIdAlbums(data.id),
}

export const AlbumsMutation = {
    createAlbum: (parent, data, context) => addAlbum(data, context),
    deleteAlbum: (parent, data, context) => deleteOne(data, context),
    updateAlbum: (parent, data, context) => updateOne(data, context),
}

export const AlbumsMapping = {
    artists: async (parent) => parent.artistsIds.map((id) => findByIdArtists(id)),
    genres: (parent) => parent.genresIds.map((id) => findByIdGenre(id)),
    tracks: (parent) => parent.trackIds.map((id) => findByIdTracks(id)),
    bands: (parent) => parent.bandsIds.map((id) => findByIdBands(id)),
    id: (parent) => parent._id
}