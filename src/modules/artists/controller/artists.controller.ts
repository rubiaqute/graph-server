import { addArtist, deleteOne, findAll, findById, updateOne } from '../service/artists.service';
export interface Artist {
    _id: string,
    id: string;
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bandsIds: string[]
    instruments: string[];
}
export const ArtistsQueries = {
    artists: (empty: null, data) => findAll(data),
    artist: (empty: null, data) => findById(data.id),
}

export const ArtistsMutation = {
    createArtist: (parent, data, context) => addArtist(data, context),
    deleteArtist: (parent, data, context) => deleteOne(data, context),
    updateArtist: (parent, data, context) => updateOne(data, context),
}
