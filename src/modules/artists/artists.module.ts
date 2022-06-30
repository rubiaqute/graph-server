import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from "./services/artists.service";

@Module({
    imports: [HttpModule],
    providers: [ArtistsService, ArtistsResolver],
    exports: [ArtistsService],
})

export class ArtistsModule {

}