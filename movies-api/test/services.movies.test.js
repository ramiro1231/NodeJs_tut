const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock,getAllStub} = require('../util/mocks/mongoLib');

const { moviesMock} = require('../util/mocks/movies');

describe("services - movies", function() {
    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    })

    const moviesService = new MoviesService();

    describe("when getMovies methos is called", async function(){ 
        it('should call the getall MongoLib method', async function(){
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        })

        it('should return an array of movies', async function(){ 
            const result = await moviesService.getMovies({});
            //console.log(result);
            const expected= moviesMock;
            assert.deepEqual(result, expected);
        })
    })
})