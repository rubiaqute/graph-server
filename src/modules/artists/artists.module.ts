import { Module } from '@nestjs/common'
import { ArtistsController } from './controllers/artists.controller';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from "./services/artists.service";

@Module({
    imports: [],
    providers: [ArtistsService, ArtistsResolver],
    exports: [ArtistsService],
    controllers: [ArtistsController]
})

export class ArtistsModule { }