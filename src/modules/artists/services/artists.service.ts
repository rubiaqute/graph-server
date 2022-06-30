import { Injectable } from '@nestjs/common';
import { Artist } from '../../../graphql';

@Injectable()
export class ArtistsService {
    private readonly artists: Artist[] = [];

    create(artist: Artist) {
        this.artists.push(artist);
    }

    findAll(): Artist[] {
        return this.artists;
    }
}