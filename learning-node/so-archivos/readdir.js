const fs = require('fs');

const files = fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});