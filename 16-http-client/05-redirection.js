#!/usr/bin/node
//重定向

const http=require('http'),
      url=require('url'),
      log=console.log;


var addr='http://sina.com/'||process.argv[2];

function opt(addr){
  var options=url.parse(addr);

  options.method='GET';
  options.headers={'User-Agent':'05-redirection.js'};

  return options;
}

function get(options){
  http.get(options,(res)=>{
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');
      
    if(res.statusCode<400 && res.statusCode>=300){
      get(opt(res.headers.location));
    }else{
      res.pipe(procsee.stdout);
    }
  });
}

get(opt(addr));


