const { Transform } = require('stream');

function camelCase(str) {
    return str 
        .replace(/\s(.)/g, function(a) { 
            return a.toUpperCase(); 
        }) 
        .replace(/\s/g, '') 
        .replace(/^(.)/, function(b) { 
            return b.toLowerCase(); 
        }); 
}

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(camelCase(chunk.toString()));
        callback();
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout);