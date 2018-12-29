#!/usr/bin/node

const http=require('http');
      fs=require('fs');

/*http.createServer((req,res)=>{
  res.end('<!DOCTYPE html><html><head><title>hello</title></head><body><h1>hello world!</h1></body></html>');
}).listen(8080);
*/



var fileName=process.argv[2];
var buf=fs.readFileSync(fileName);
console.log(fileName);
var dataURI='data:image/png;base64,'+buf.toString('base64');
console.log(dataURI);

var html='<!DOCTYPE html><html><head><title>hello</title></head><body><img src="'+dataURI+'"></body></html>'

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);


