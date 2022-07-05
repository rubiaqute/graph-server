import { findByIdArtists } from "../artists/service/artists.service"
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
    id: (parent) => parent._id
}