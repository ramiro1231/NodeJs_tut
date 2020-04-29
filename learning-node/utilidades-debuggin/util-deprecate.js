const util = require('util');

const helloPLuto = util.deprecate( () => {
    console.log('hello pluto');
}, 'pluto is deprecated, it is not a planet anymore');

helloPLuto();