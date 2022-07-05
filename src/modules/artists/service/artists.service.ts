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