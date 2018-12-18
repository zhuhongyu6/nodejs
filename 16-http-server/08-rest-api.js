#!/usr/bin/node

//解析http方法

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var items=[];

http.createServer((req,res)=>{
  console.log('Http request method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;

    case 'POST':
      add(req,res);
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
  var msg=JSON.stringfy(items);
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Length',Buffer.byteLength(msg));

  res.end(msg);
}

function add(req,res){
  var data='';
  req.on('data',(chunk)=>{data+=chunk;});
  req.on('end',()=>{
    var item=qs.parse(data).item;
    if(item!=='') items.push(item);
  });
  res.end('OK!');
}

function update(){
  send(res);
}

function remove(req,res){
  if(req.url==='/'){
    items=[];
    }else{
      var id=qs.parse(url.parse(req.url).query).id;
      console.log('ID:',id);
      if(id>=0 && id<items.length){
        items.splice(id,1);
        res.end('OK!');
      }else{
        res.end('Error!');
      }
    }
  res.end('OK!');
}

function send(res){
  res.end('OK!');
}
