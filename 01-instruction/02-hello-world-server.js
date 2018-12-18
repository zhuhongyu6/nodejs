#!/usr/bin/node
/*
const http=require('http');

http.createServer((req,res)=>{
  res.end('hello world');
}).listen(8080);
*/




const http=require('http');
const server=http.createServer();

server.on('request',(req,res)=>{
  res.end('hello');
});

server.listen(8080);
