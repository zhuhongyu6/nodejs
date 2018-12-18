#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      log=console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
  
  if(req.url==='/'&&req.method==='POST'){
    var data='';
    req.setEncoding('binary');
    req.on('data',(chunk)=>{
      data+=chunk;
    });
    req.on('end',()=>{
      log(data);
      //log(data.split('\r\n'));
      var das=data.split('\r\n');
      var fileName=das[1].split(';')[2].split('=')[1];
      fileName=fileName.slice(1,fileName.length-1);
      log('file name:',fileName);
      var fileData=das[4];
      log('file data:',fileData);
      //log(data.split(';'));
      //log(das[1]);
      //log(das[4]);
      fs.writeFileSync(fileName,fileData,'binary');
    });
    res.end(' OK!');
  }else{
    res.statusCode=404;
    res.end('Error!');
  }
}).listen(8080);
