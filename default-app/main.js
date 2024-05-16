var http = require('http');

http.createServer(function(req, res) {
    res.write('Welcome to Node JS Application');
    res.end();
}).listen(8000);

console.log('Application started successfully');