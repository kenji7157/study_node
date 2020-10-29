const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// テンプレートファイルの読み込み(同期処理)
const index_page = fs.readFileSync('./index.ejs', 'utf8');

var server = http.createServer(
  (request, response) => {
    // レンダリングの実行 contentにHTMLに変換したデータが入る
    var content = ejs.render(index_page, {
      title: "Indexページ",
      content: "ejsを用いたページです。"
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    // writeで書き出す
    response.write(content);
    response.end();
  }
);

server.listen(3000);
console.log('Server start!');