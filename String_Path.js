var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

/*
  res.write(req.url);

intput :  http://localhost:8080/foods
output show : /foods

intput :  http://localhost:8080/
output show : /

intput :  http://localhost:8080/foods/T1
output show : /foods/T1
*/