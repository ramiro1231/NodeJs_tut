const express = require('express');
const MoviesService = require('../services/movies');
const slash   = require('express-slash');
const {
    movieIdSchema,
    createMoviesSchema,
    updateMovieSchema
} = require('../util/schemas/movies');

const validationHandler = require('../util/middleware/validationHandler');
const cacheResponse = require('../util/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS,SIXTY_MINUTES_IN_SECONDS} = require('../util/time');

function moviesApi(app) {
    const router = express.Router({
        caseSensitive: app.get('case sensitive routing'),
        strict: app.get('strict routing')
    });
    app.use("/api/movies", router);
    app.use(slash());
    const moviesService = new MoviesService();
    router.get('/', async function (req, res, next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        const { tags } = req.query;

        try {
            const movies = await moviesService.getMovies({ tags })
            //throw new Error('Error getting movies');
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (err) {
            next(err);
        }
    });

    router.get('/:movieId', validationHandler({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: movies,
                message: 'Movies retrieved'
            })
        } catch (err) {
            next(err);
        }
    });

    router.post('/', validationHandler(createMoviesSchema), async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createMovieID = await moviesService.createMovie({ movie });

            res.status(201).json({
                data: createMovieID,
                message: 'movies create'
            });

        } catch (err) {
            next(err);
        }
    });

    router.put('/:movieId', validationHandler({ movieId: movieIdSchema }), validationHandler(updateMovieSchema), async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie })

            res.status(200).json({
                data: updatedMovieId,
                message: 'movies updated'
            })
        } catch (err) {
            next(err);
        }
    });

    router.patch('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const patchedMovieId = await moviesService.updateMovie({ movieId, movie })

            res.status(200).json({
                data: patchedMovieId,
                message: 'movie patched'
            })
        } catch (err) {
            next(err);
        }
    });


    router.delete('/:movieId', validationHandler({ movieId: movieIdSchema }, 'params'), async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data: deletedMovieId,
                message: 'movies deleted'
            })
        } catch (err) {
            next(err);
        }
    });

}

module.exports = moviesApi;