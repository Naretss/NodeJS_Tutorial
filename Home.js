var http = require('http');
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
*/

var http = require('http');
var dt = require('./Module_Date_time');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.DateTimeNOW());
  res.end();
}).listen(8080);