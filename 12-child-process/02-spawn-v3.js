#!/usr/bin/node

//web服务版本

const cp=require('child_process'),
      http=require('http');

http.createServer((req,res)=>{
  var cmd=cp.spawn('./02-child.js');
  cmd.stdout.pipe(res);

}).listen(8080);
