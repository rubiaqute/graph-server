import { findByIdArtists } from "../artists/service/artists.service"
import { findByIdGenre } from "../genres/genres.service"
import { addBand, deleteOne, findAll, findByIdBands, updateOne } from "./bands.service"

export const BandsQueries = {
    bands: (parent, data) => findAll(data),
    band: (parent, data) => findByIdBands(data.id),
}

export const BandsMutation = {
    createBand: (parent, data, context) => addBand(data, context),
    deleteBand: (parent, data, context) => deleteOne(data, context),
    updateBand: (parent, data, context) => updateOne(data, context),
}

export const BandsMapping = {
    genres: (parent) => parent.genresIds.map((id) => findByIdGenre(id)),
    id: (parent) => parent._id
}

export const MembersMapping = {
    artist: (parent) => findByIdArtists(parent.artist),
}