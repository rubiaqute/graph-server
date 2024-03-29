import { addGenre, deleteOne, findAll, findByIdGenre, updateOne } from "./genres.service"

export const GenresQueries = {
    genres: (parent, data) => findAll(data),
    genre: (parent, data) => findByIdGenre(data.id),
}

export const GenresMutation = {
    createGenre: (parent, data, context) => addGenre(data, context),
    deleteGenre: (parent, data, context) => deleteOne(data, context),
    updateGenre: (parent, data, context) => updateOne(data, context),
}