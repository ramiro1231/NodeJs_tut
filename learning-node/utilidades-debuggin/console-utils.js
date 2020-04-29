// %s
// %%d

/*console.log("Un %s y un %s", "perrito", "gatito");

console.info('Hello world!');
console.warn('Un warning');*/
//console.assert( 42 == "42");

//console.trace('hello');

const util = require('util');
const debbuging = util.debuglog("foo");

debbuging("Hello from foo");