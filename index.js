const http = require('http');

const colors = require('colors');
// console.log(http);

// http.createServer(function(req, res){//req -> request, res -> respond
//     res.writeHead(404, {'content-type': 'text/plain'});// aixo son codis per saber si la peticio ha anat be o no i si no hi anat a on ha fallat
//     res.write('Supa Hot fire');
//     res.end();//acabar la resposta
// }).listen(3000);

//realitza la mateixa funcio

const handleServer = function(req, res){//req -> request, res -> respond
    res.writeHead(200, {'content-type': 'text/html'});// aixo son codis per saber si la peticio ha anat be o no i si no hi anat a on ha fallat
    res.write('<h1>Supa Hot fire</h1>');
    res.end();//acabar la resposta
}

const server= http.createServer(handleServer);

server.listen(3000,function(){//feim escoltar el servidor pel port 3000
    console.log('Server on port 3000'.yellow);
});


//npmjs.com repositori de codi de js de molta gent 