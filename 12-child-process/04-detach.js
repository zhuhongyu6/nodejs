#!/usr/bin/node
//spawn进程分离

const cp=require('child_process');

console.log('I am father process.PID:',process.pid);

var cmd=cp.spawn('./02-child.js',{detached:true,stdio:['ignore',1,2]});

global.setTimeout(()=>{
  console.log('I am father,goodbye!');
  process.exit();
},6000);
