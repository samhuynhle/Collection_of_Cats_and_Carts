const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);


    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/carts1') {
        fs.readFile('./views/carts.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/carts2') {
        fs.readFile('./views/carts2.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/survey') {
        fs.readFile('./views/survey.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('stylesheets/style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat4.jpg') {
        fs.readFile('./images/cat4.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat5.jpg') {
        fs.readFile('./images/cat5.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat6.jpg') {
        fs.readFile('./images/cat6.jpg', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});

server.listen(1500);

console.log("Running in localhost at port 1500");