import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ArtistsService } from "../../artists/services/artists.service";
import { BandsService } from "../../bands/services/bands.service";
import { GenresService } from "../../genres/services/genres.service";
import { TracksService } from "../services/tracks.service";

@Resolver('Track')
export class TracksResolver {
    constructor(
        private readonly tracksService: TracksService,
        private readonly bandsService: BandsService,
        private readonly artistsService: ArtistsService,
        private readonly genresService: GenresService
    ) { }

    @Query()
    async track(@Args('id') id: string) {
        // return this.tracksService.findOneById(id)
    }

    @Query()
    async tracks() {
        // return this.tracksService.findAll()
    }

    @Resolver()
    @ResolveField()
    async bands(@Parent() track) {
        const { bandsIds } = track
        return await Promise.all(bandsIds.map(id => {
            // return this.bandsService.findOnebyId(id)
        }))
    }

    @Resolver()
    @ResolveField()
    async artists(@Parent() track) {
        const { artistsIds } = track
        return await Promise.all(artistsIds.map(id => {
            // return this.artistsService.findOnebyId(id)
        }))
    }

    @Resolver()
    @ResolveField()
    async genres(@Parent() track) {
        const { genresIds } = track
        return await Promise.all(genresIds.map(id => {
            // return this.genresService.findOnebyId(id)
        }))
    }
}

