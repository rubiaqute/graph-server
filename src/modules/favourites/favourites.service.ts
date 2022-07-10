import { HttpService } from '@nestjs/axios'
import * as dotenv from "dotenv";
dotenv.config({ path: "./../../.env" });

interface Favorite {
    _id: string;
    id: string;
    userId: string;
    bandsIds: string[];
    genresIds: string[];
    artistsIds: string[];
    tracksIds: string[];
}

enum FavTypes {
    bands = "bands",
    genres = "genres",
    artists = "artists",
    tracks = "tracks"
}

const httpService = new HttpService()
const url = process.env.FAVOURITES_URL || 'http://localhost:3007/v1/favourites'

export async function findFavourites(payload, context): Promise<Favorite> {
    try {
        const { data } = await httpService.axiosRef.get(`${url}`, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addTrackToFavorite(payload, context): Promise<Favorite> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/add`, { id: payload.trackId, type: FavTypes.tracks }, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addBandToFavorite(payload, context): Promise<Favorite> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/add`, { id: payload.bandId, type: FavTypes.bands }, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addArtistToFavorite(payload, context): Promise<Favorite> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/add`, { id: payload.artistId, type: FavTypes.artists }, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addGenreToFavorite(payload, context): Promise<Favorite> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/add`, { id: payload.genreId, type: FavTypes.genres }, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

// export async function deleteOne(payload, context): Promise<any> {
//     try {
//         const { data } = await httpService.axiosRef.delete(`${url}/${payload.id}`, {
//             headers: {
//                 authorization: context.token
//             }
//         });
//         return data
//     } catch (e) {
//         throw new Error(e.message)
//     }
// }

// export async function updateOne(payload, context): Promise<Album> {
//     try {
//         const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.album, {
//             headers: {
//                 authorization: context.token
//             }
//         });
//         return data
//     } catch (e) {
//         throw new Error(e.message)
//     }
// }