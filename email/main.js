var http = require('http');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
})

var mailOptions = {
    from: '',
    to: '',
    subject: 'Testing Mail with Nodemailer',
    text: 'Hi'
}

transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err);
    }
    console.log('Mail Sent');
});

http.createServer(function(req, res) {
    res.write('Welcome to Node JS Application');
    res.end();
}).listen(8000);

console.log('Application started successfully');