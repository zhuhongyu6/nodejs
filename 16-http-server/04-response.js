#!/usr/bin/node

const http=require('http');

http.createServer((req,res)=>{
  if(req.url==='/'){
  var html=''
  +'<!DOCTYPE html>'
  +'<html lang="en">'
  +'<head>'
  +'<meta charset="UTF-8">'
  +'<title>hello</title>'
  +'</head>'
  +'<body>'
  +'<h1>Hello World!</h1>'
  +'</body>'
  +'</html>';

  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html)
  });
  res.end(html);
  }else{
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain');
    res.end('Resource not found!')
  }
}).listen(8080);
