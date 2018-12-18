#!/usr/bin/node

//解析http方法

const http=require('http');

http.createServer((req,res)=>{
  console.log('Http request method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;

    case 'POST':
      create(req,res);
      break;

    case 'PUT':
      update(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;

    default:
      res.end('Something wrong!');
  }
}).listen(8080);

function select(req,res){
  send(res);
}

function create(req,res){
  send(res);
}

function update(){
  send(res);
}

function remove(req,res){
  send(res);
}

function send(res){
  res.end('OK!');
}
