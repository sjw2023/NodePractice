var http = require('http');
var fs = require('fs');

function send404( response )
{
    response.writeHead(404,{ 'Content-Type':'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

var server = http.createServer( function ( request, response ) {
    if(request.method =='GET', request.url == '/')
    {
        response.writeHead( 200, {'Content-Type' : 'text/html' } );
        fs.createReadStream( '../Website/main.html' ).pipe(response);
    }
    else
    {
        send404( response );
    }

    /*console.log('request starting....');

    // respond
    response.write('hello client!');
    response.end();*/
});

server.listen(3000);
console.log( 'Server running at http://127.0.0.1:3000/' );
