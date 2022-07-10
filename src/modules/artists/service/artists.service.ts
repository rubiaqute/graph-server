import { HttpService } from '@nestjs/axios'
import { Artist } from "../controller/artists.controller";
import * as dotenv from "dotenv";
dotenv.config({ path: "./../../../.env" });

const httpService = new HttpService()
const url = process.env.ARTISTS_URL || 'http://localhost:3002/v1/artists'

export async function findAll(payload): Promise<Artist[]> {
    try {
        const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

        return data.items
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function findByIdArtists(id: string): Promise<Artist> {
    try {
        const { data } = await httpService.axiosRef.get(`${url}/${id}`);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addArtist(payload, context): Promise<Artist> {
    try {
        const { data } = await httpService.axiosRef.post(`${url}`, payload, {
            headers: {
                authorization: context.token
            }
        })
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

export async function updateOne(payload, context): Promise<Artist> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.artist, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}