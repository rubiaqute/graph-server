import { HttpService } from '@nestjs/axios'
import { bandsUrl } from '../../main';

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
const url = bandsUrl || 'http://localhost:3003/v1/bands'

export async function findAll(payload): Promise<Band[]> {
    const { data } = await httpService.axiosRef.get(url, { params: { limit: payload.limit, offset: payload.offset }, });

    return data.items
}

export async function findByIdBands(id: string): Promise<Band> {
    const { data } = await httpService.axiosRef.get(`${url}/${id}`);

    return data
}

export async function addBand(payload, context): Promise<Band> {
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

export async function updateOne(payload, context): Promise<Band> {
    if (context.token) {
        const { data } = await httpService.axiosRef.put(`${url}/${payload.id}`, payload.band, {
            headers: {
                authorization: context.token
            }
        });
        return data
    }
}