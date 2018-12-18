#!/usr/bin/node

const cp=require('child_process');

cp.execFile('./02-child.js',(err,out)=>{
  if(err){
    console.error(err.message);
    process.eixt(100);
  }
  console.log(out);
})


