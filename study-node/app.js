var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  // 追加内容 START
  var target = '';
  const url = req.url
  if (url === '/' || url === '/index') {
    target = './index.html';
  } else if (url === '/next') {
    target = './next.html';
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('bad request');
    return;
  }
  fs.readFile(target, 'utf-8', function(err, data){
  // 追加内容 END
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(3000);