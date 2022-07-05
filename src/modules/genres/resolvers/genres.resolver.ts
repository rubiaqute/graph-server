import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { BandsService } from "../../bands/services/bands.service";
import { GenresService } from "../../genres/services/genres.service";

@Resolver('Track')
export class GenresResolver {
    constructor(
        private readonly bandsService: BandsService,
    ) { }


}

