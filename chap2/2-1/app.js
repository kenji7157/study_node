// httpモジュールをロード(読み込む)
const http = require('http');

var server = http.createServer(
  (request, response) => {
    // サーバー側のログ
    // console.log('-- Hello node.js --');
    
    // ブラウザに出力される
    // response.end('Hello Node.js');
    
    // htmlを出力
    // response.end('<html><body<h1>Hello</h1><p>Welcome to Node.js</p></body></html>');

    // ヘッダー情報の設定
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="ja">');
    response.write('<head><meta charset="utf-8">');
    response.write('<title>Hello</title></head>');
    response.write('<body><h1>Hello Node.js!</h1>');
    response.write('<p>This is Node.js sample page.</p>');
    response.write('<p>これは、Node.jsのサンプルページです。</p>', 'utf8');
    response.write('</body></html>');
    response.end();
  }
);

// 3000ポートで待機する
server.listen(3000);