const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == "/echo") {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        })
        .on ('end', () => {
            let weekdays = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
            let birthDate = new Date(body.toString());
            console.log(birthDate)
            let birthDay = weekdays[birthDate.getDay()];
            console.log(birthDay)

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            //body = Buffer.concat(body).toString();
            res.end(birthDay);
        })

    } else {
        res.statusCode = 404;
        res.end();
    }

})

server.listen(3001);
console.log("Servidor en la url localhost:3000");