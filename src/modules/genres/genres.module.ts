import { Module } from '@nestjs/common'
import { GenresResolver } from './resolvers/genres.resolver';
import { GenresService } from './services/genres.service';

@Module({
    imports: [],
    providers: [GenresService, GenresResolver],
    exports: [GenresService]
})

export class GenresModule { }