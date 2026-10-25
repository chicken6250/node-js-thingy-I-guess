console.log("nice it worked");
console.log("idk if anyone is reading this but maybe if I actually figured this you you can do a thing in a seond");
const {execSync} = require('child_process');

execSync('sleep 5'); // block process for 1 second.
console.log("did it wait ?")
execSync('sleep 3')
console.log("I guess it did I think?")
console.log("hopefully nothing really terrible goes wrong or something")

console.log("Ima go learn how to actually use node js now.")
execSync('sleep 3')
console.log("Pretty sure I kinda just can't really do this at all maybe idk")
execSync('sleep 2')
console.log("actually im pretty sure I can just make a website or something for the thing")
console.log("echo If I can actually figure this out you should be able to open a website or something in a second ?")
//-- Source - https://stackoverflow.com/q/29815207
//-- Posted by nealous3
//-- Retrieved 2026-10-25, License - CC BY-SA 3.0

var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8080);

console.log("I really need to look at some documentation . . .")
