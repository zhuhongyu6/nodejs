#!/usr/bin/node

//执行外部程序

const cp=require('child_process');

var cmd=process.argv[2],
    arg=[];

for(var i=3;i<process.argv.length;i++){
    arg.push(process.argv[i]);
}

cp.execFile(cmd,arg,(err,out,error)=>{
  if(err){
    console.error(error);
    process.exit(100);
  }
  console.log(out);
})
