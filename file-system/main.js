var http = require('http');
var fs = require('fs');

// Example 1
fs.appendFile('file2.txt', 'Hi I am kuldeep singh', function(err) {
    if (err) {
        throw err;
    }
    console.log('File created successfully');
});

// Example 2
fs.appendFile('file2.txt', 'Hi Now data will append', function(err) {
    if (err) {
        throw err;
    }
    console.log('In file content appended');
});

// Example 3
fs.open('myfile2.txt', 'w', function(err, file) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Saved!');
})

// Example 4
fs.writeFile('file2.txt', 'File data override', function(err) {
    if (err) {
        throw err;
    }
    console.log('File data override successfully');
});

// Example 5
fs.unlink('file2.txt', function(err) {
    if (err) {
        throw err;
    }
    console.log('File deleted successfully');
});

http.createServer(function(req, res) {
    // read file
    fs.readFile('file.html', function(err, data) {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8000);

console.log('Application started successfully');