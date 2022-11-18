import { findByIdArtists } from "../artists/service/artists.service"
import { findByIdBands } from "../bands/bands.service"
import { findByIdGenre } from "../genres/genres.service"
import { findByIdTracks } from "../tracks/tracks.service"
import { addArtistToFavorite, addBandToFavorite, addGenreToFavorite, addTrackToFavorite, findFavourites } from "./favourites.service"

export const FavouritesQueries = {
    favourites: (parent, data, context) => findFavourites(data, context),
}

export const FavouritesMutation = {
    addTrackToFavourites: (parent, data, context) => addTrackToFavorite(data, context),
    addBandToFavourites: (parent, data, context) => addBandToFavorite(data, context),
    addArtistToFavourites: (parent, data, context) => addArtistToFavorite(data, context),
    addGenreToFavourites: (parent, data, context) => addGenreToFavorite(data, context)

}

export const FavouritesMapping = {
    artists: (parent) => parent.artistsIds.map((id: string) => findByIdArtists(id)),
    genres: (parent) => parent.genresIds.map((id: string) => findByIdGenre(id)),
    tracks: (parent) => parent.tracksIds.map((id: string) => findByIdTracks(id)),
    bands: (parent) => parent.bandsIds.map((id: string) => findByIdBands(id)),
    id: (parent) => parent._id
}