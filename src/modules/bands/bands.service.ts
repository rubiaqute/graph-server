import { HttpService } from '@nestjs/axios'
import * as dotenv from "dotenv";
dotenv.config({ path: "./../../.env" });

interface Band {
    _id: string;
    id: string;
    name: string;
    origin: string;
    membersId: Member[];
    website: string;
    genresIds: string[];
}

interface Member {
    artist: string;
    instrument: string;
    years: string[];
}

const httpService = new HttpService()
const url = process.env.BANDS_URL || 'http://localhost:3003/v1/bands'

export async function findAll(payload): Promise<Band[]> {
    try {
        const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

        return data.items
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function findByIdBands(id: string): Promise<Band> {
    try {
        const { data } = await httpService.axiosRef.get(`${url}/${id}`);

        return data
    } catch (e) {
        throw new Error(e.message)
    }
}

export async function addBand(payload, context): Promise<Band> {
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

export async function updateOne(payload, context): Promise<Band> {
    try {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.band, {
            headers: {
                authorization: context.token
            }
        });
        return data
    } catch (e) {
        throw new Error(e.message)
    }
}