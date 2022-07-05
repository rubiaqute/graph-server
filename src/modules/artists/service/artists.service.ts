import { artistsUrl } from "../../../main";
import { HttpService } from '@nestjs/axios'
import { Artist } from "../controller/artists.controller";

const httpService = new HttpService()
const url = artistsUrl || 'http://localhost:3002/v1/artists'

export async function findAll(): Promise<Artist[]> {
    const { data } = await httpService.axiosRef.get(url);

    return data.items
}

export async function findById(id: string): Promise<Artist> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function addArtist(payload, context): Promise<Artist> {
    if (context.token) {
        httpService.axiosRef.defaults.headers.common['authorization'] = context.token;
        const { data } = await httpService.axiosRef.post(`${url}`, payload);
        return data
    }
}

export async function deleteOne(payload, context): Promise<any> {
    if (context.token) {
        httpService.axiosRef.defaults.headers.common['authorization'] = context.token;
        const { data } = await httpService.axiosRef.delete(`${url}/${payload.id}`);
        return data
    }
}

export async function updateOne(payload, context): Promise<Artist> {
    if (context.token) {
        httpService.axiosRef.defaults.headers.common['authorization'] = context.token;
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.artist);
        return data
    }
}