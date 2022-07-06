import { HttpService } from '@nestjs/axios'
import { genresUrl } from '../../main';

interface Genre {
    _id: string;
    id: string;
    name: string;
    description: string;
    country: string;
    year: string;
}

const httpService = new HttpService()
const url = genresUrl || 'http://localhost:3001/v1/genres'

export async function findAll(payload): Promise<Genre[]> {
    try {
        const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

        return data.items
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function findByIdGenre(id: string): Promise<Genre> {
    try {
        const { data } = await httpService.axiosRef.get(`${url}/${id}`);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addGenre(payload, context): Promise<Genre> {
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

export async function updateOne(payload, context): Promise<Genre> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.genre, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}