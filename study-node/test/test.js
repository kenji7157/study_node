// http.jsで定義しているモジュールをインポートする
// var http = require('http');

// myutil.jsで定義しているモジュールをインポートする
const myutil = require('./myutil');
// myutil.jsで定義しているモジュールからnameだけをインポートする
// const {name} = require('./myutil');


// 既に宣言されているため エラーとなる
const name = 'kawanobe kenji';


// console.log('log test', myutil.add);
console.log('log myutil.name', myutil.name);
console.log('log myutil.age', myutil.age);
console.log('log name', name);
// console.log('log age', age);

// momentモジュールの利用
const moment = require('moment');
const now = moment();
console.log('time:', now.format('YYYY/MM/DD'));