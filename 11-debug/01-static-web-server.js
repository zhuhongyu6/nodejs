#!/usr/bin/node
//打印调试
const http=require('http'),
      path=require('path'),
      fs=require('fs'),
      util=require('util'),
      log=util.debuglog('wd');

var file; //request file in URl

http.createServer((req,res)=>{
  log(req.headers);
  log();
  log(req.url);
  file=path.join(__dirname,req.url);
  log();
  log(file);
  
  var read=fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.message);
  });
  read.pipe(res);
}).listen(8080);
