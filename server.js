var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! From node http server! \nThis line tested a redeploy from awsow pulling from git. \n');
}).listen(80);