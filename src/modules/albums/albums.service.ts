import { HttpService } from '@nestjs/axios'
import * as dotenv from "dotenv";
dotenv.config({ path: "./../../.env" });

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
const url = process.env.ALBUMS_URL || 'http://localhost:3005/v1/albums'

export async function findAll(payload): Promise<Album[]> {
    try {
        const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

        return data.items
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function findByIdAlbums(id: string): Promise<Album> {
    try {
        const { data } = await httpService.axiosRef.get(`${url}/${id}`);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addAlbum(payload, context): Promise<Album> {
    try {
        const { data } = await httpService.axiosRef.post(`${url}`, payload, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function deleteOne(payload, context): Promise<any> {
    try {
        const { data } = await httpService.axiosRef.delete(`${url}/${payload.id}`, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function updateOne(payload, context): Promise<Album> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.album, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}