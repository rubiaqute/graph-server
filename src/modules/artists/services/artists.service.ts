import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse, } from 'axios'

import { Artist } from '../../../graphql';

@Injectable()
export class ArtistsService {
    constructor(private readonly httpService: HttpService) { }

    create(artist: Artist) {

    }

    async findAll(): Promise<Artist[]> {
        const { data } = await this.httpService.axiosRef.get('http://localhost:3002/v1/artists')
        return data
    }

}

