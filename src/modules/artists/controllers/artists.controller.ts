import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { Artist } from '../../../graphql';
import { ArtistsService } from '../services/artists.service';

@Controller('Artist')
export class ArtistsController {
    constructor(private artistsService: ArtistsService) { }

    @Post()
    @Redirect(process.env.ARTISTS_URL, 302)
    async create(@Body() createArtist: Artist) {
        this.artistsService.create(createArtist);
    }

    @Get()
    @Redirect(process.env.ARTISTS_URL, 302)
    async findAll(): Promise<Artist[]> {
        return this.artistsService.findAll();
    }

    // @Get()
    // findAll(@Query() query: ListAllEntities) {
    //     return `This action returns all cats (limit: ${query.limit} items)`;
    // }

    // @Get()
    // findAll(@Res() res: Response) {
    //     res.status(HttpStatus.OK).json([]);
    // }
}