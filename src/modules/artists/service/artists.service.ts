import { artistsUrl } from "../../../main";
import { HttpService } from '@nestjs/axios'
import { Artist } from "../controller/artists.controller";

const httpService = new HttpService()
const url = artistsUrl || 'http://localhost:3002/v1/artists'

export async function findAll(payload): Promise<Artist[]> {
    const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

    return data.items
}

export async function findById(id: string): Promise<Artist> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function addArtist(payload, context): Promise<Artist> {
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

export async function updateOne(payload, context): Promise<Artist> {
    if (context.token) {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.artist, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}