import { HttpService } from '@nestjs/axios'
import { tracksUrl } from '../../main';

interface Track {
    _id: string;
    id: string;
    title: string;
    albumId: string;
    artistsIds: string[];
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}

const httpService = new HttpService()
const url = tracksUrl || 'http://localhost:3006/v1/tracks'

export async function findAll(payload): Promise<Track[]> {
    const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

    return data.items
}

export async function findByIdTracks(id: string): Promise<Track> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function addTrack(payload, context): Promise<Track> {
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

export async function updateOne(payload, context): Promise<Track> {
    if (context.token) {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.track, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}