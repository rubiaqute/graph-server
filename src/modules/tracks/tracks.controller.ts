import { findByIdAlbums } from "../albums/albums.service"
import { findByIdArtists } from "../artists/service/artists.service"
import { findByIdBands } from "../bands/bands.service"
import { findByIdGenre } from "../genres/genres.service"
import { addTrack, deleteOne, findAll, findByIdTracks, updateOne } from "./tracks.service"

export const TracksQueries = {
    tracks: (parent, data) => findAll(data),
    track: (parent, data) => findByIdTracks(data.id),
}

export const TracksMutation = {
    createTrack: (parent, data, context) => addTrack(data, context),
    deleteTrack: (parent, data, context) => deleteOne(data, context),
    updateTrack: (parent, data, context) => updateOne(data, context),
}

export const TracksMapping = {
    artists: async (parent) => parent.artistsIds.map((id: string) => findByIdArtists(id)),
    album: (parent) => parent.albumId && findByIdAlbums(parent.albumId),
    genres: (parent) => parent.genresIds.map((id: string) => findByIdGenre(id)),
    bands: (parent) => parent.bandsIds.map((id: string) => findByIdBands(id)),
    id: (parent) => parent._id
}