#!/usr/bin/node
/*流异步处理*/

const fs=require('fs');

var file=process.argv[2]||__filename;

//fs.createReadStream(file).pipe(process.stdout);

var src=fs.createReadStream(file);

src.on('error',(err)=>{
  console.error(err.message);
  process.exit(1);
});

//这里不用箭头函数用普通函数，这里的this指代当前对象ReadStream
//用箭头函数指示全局对象global
src.on('open',function(){
  //console.log(this);
  this.pipe(process.stdout);
});

/*全局异常处理
process.on('uncaughtException',(err)=>{
  console.error(err.message);
  process.exit(100);
})*/
