#!/usr/bin/node

const http=require('http');

var address=process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
console.log(address);
address=global.encodeURI(address);
console.log(address);

http.get(address,(res)=>{
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log();

  res.pipe(process.stdout);
});
