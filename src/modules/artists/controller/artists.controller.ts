import { findAll, findById } from '../service/artists.service';
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
    artists: () => findAll(),
    artist: (empty: null, data) => findById(data.id),
}
