console.log("nice it worked");
console.log("idk if anyone is reading this but maybe if I actually figured this you you can do a thing in a seond");
const {execSync} = require('child_process');

execSync('sleep 5'); // block process for 5 of the secondy wecondies.
console.log("did it wait ?")
execSync('sleep 3')
console.log("I guess it did I think?")
console.log("hopefully nothing really terrible goes wrong or something")

console.log("Ima go learn how to actually use node js now.")
execSync('sleep 3')
console.log("Pretty sure I kinda just can't really do this at all maybe idk")
execSync('sleep 2')
console.log("actually im pretty sure I can just make a website or something for the thing")
console.log("If I can actually figure this out you should be able to open a website or something in a second ?")




var path = require('path');
var connect = require('connect');
var app = connect();
var fs = require('fs');

var dir = path.join(__dirname);

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

app.use(function (req, res) {
    var reqpath = req.url.toString().split('?')[0];
    if (req.method !== 'GET') {
        res.statusCode = 501;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Method not implemented');
    }
    var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.setHeader('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Not found');
    });
});

app.listen(8080, function () {
    console.log('Listening on http://localhost:8080/');
});


