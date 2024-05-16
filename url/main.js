var http = require('http');
var url = require('url');

var dummyAddress = 'http://localhost:8080/default.htm?year=2017&month=february';
var parser = url.parse(dummyAddress, true);
console.log(parser.hostname);
console.log(parser.port);
console.log(parser.query);

http.createServer(function(req, res) {
    res.write('Welcome to Node JS Application');

    res.end();
}).listen(8000);

console.log('Application started successfully');