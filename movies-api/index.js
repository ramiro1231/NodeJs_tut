const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(config.port, function () {
    console.log(`Listenig http://localhost:${config.port}`);
});








/*app.get('/' , function(req, res) {
    res.send('hello world');
});

app.get('/json' , function(req, res) {
    res.json({hello: 'world'});
});

app.get('/user/:id' , function(req, res) {
    res.send('user' + req.params.id);
});

app.get('/bisiesto/:year' , function(req, res) {
    res.send(esBisiesto(req.params.year));
});
function esBisiesto(anio) {
    return  (( anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? "Es Bisiesto" : "No es Bisiesto";
}*/