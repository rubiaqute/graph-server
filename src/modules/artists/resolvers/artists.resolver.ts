import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ArtistsService } from "../../artists/services/artists.service";
import { BandsService } from "../../bands/services/bands.service";
import { GenresService } from "../../genres/services/genres.service";

@Resolver('Artists')
export class ArtistsResolver {
    constructor(
        private readonly bandsService: BandsService,
        private readonly artistsService: ArtistsService,
        private readonly genresService: GenresService
    ) { }

    @Query()
    async artists() {
        return this.artistsService.findAll()
    }

}

