// httpモジュールをロード(読み込む)
const http = require('http');
const ft = require('fs');

var server = http.createServer(
  (request, response) => {
    console.log('-- log start --');
    // readFileは非同期処理
    ft.readFile('./index.html', 'UTF-8',
      (error, data) => {
        console.log('-- log 1 --');
        response.writeHead(200, {'Content-Type': 'text/html'});
        // dataは第一引数(index.html)の内容を持つ
        response.write(data);
        response.end();
        console.log('-- log 2 --');
      });
    console.log('-- log end --')
  }
);

// 3000ポートで待機する
server.listen(3000);