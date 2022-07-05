import { HttpService } from '@nestjs/axios'
import { albumsUrl } from '../../main';

interface Album {
    _id: string;
    id: string;
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    trackIds: string[];
    genresIds: string[];
    image: string;
}

const httpService = new HttpService()
const url = albumsUrl || 'http://localhost:3005/v1/albums'

export async function findAll(payload): Promise<Album[]> {
    const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

    return data.items
}

export async function findByIdAlbums(id: string): Promise<Album> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function addAlbum(payload, context): Promise<Album> {
    if (context.token) {
        const { data } = await httpService.axiosRef.post(`${url}`, payload, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}

export async function deleteOne(payload, context): Promise<any> {
    if (context.token) {
        const { data } = await httpService.axiosRef.delete(`${url}/${payload.id}`, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}

export async function updateOne(payload, context): Promise<Album> {
    if (context.token) {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.album, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}