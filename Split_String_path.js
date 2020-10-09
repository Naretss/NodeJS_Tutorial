var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  if(q.year && q.month){
    var txt = q.year + " " + q.month;
  }else{
    var txt = "Pls , input year , mouth ex.http://localhost:8080/?year=2017&month=July "
  }
  res.end(txt);
}).listen(8080);


/*
input : http://localhost:8080/?year=2017&month=July
output : 2017 July

input :http://localhost:8080/?year=2017
output : Pls , input year , mouth ex.http://localhost:8080/?year=2017&month=July
*/