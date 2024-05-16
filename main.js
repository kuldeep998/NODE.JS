var http = require('http');

http.createServer(function(req, res) {
    res.write('Welcome to NODE JS Application ');
    res.end();
}).listen(8000);

console.log('Application loaded successfully');