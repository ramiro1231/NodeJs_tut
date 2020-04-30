//const { moviesMock} = require('../util/mocks/movies');

const MongoLib = require('../lib/mongo');

class MoviesService {
    constructor() {
        this.collection = 'movies';
        this.mongoDb = new MongoLib();
    }
    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } }
        const movies = await this.mongoDb.getAll(this.collection, query);
        return movies || [];
    }
    async getMovie({ movieId }) {
        const movies = await this.mongoDb.get(this.collection, movieId);
        return movies || [];
    }

    async createMovie({ movie }) {
        const createMovieId = await this.mongoDb.create(this.collection, movie);
        return createMovieId;
    }

    async updateMovie({ movieId, movie } = {}) {
        const updatedMovieId = await this.mongoDb.update(this.collection, movieId, movie);
        return updatedMovieId;
    }

    async deleteMovie({ movieId }) {
        const deletedMovieId = await this.mongoDb.delete(this.collection, movieId);
        return deletedMovieId;
    }
};

module.exports = MoviesService;